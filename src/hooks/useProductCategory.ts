import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState } from "@/store";
import {
  onLoadProductCategories,
  onSetError,
} from "@/store/slices/productCategorySlice";
import { GetProductCategoriesUseCase } from "@/application/productCategory";

import Swal from "sweetalert2";
import { AxiosError } from "axios";

export const useProductCategory = () => {
  const dispatch = useDispatch();

  const {
    productCategories,
    productCategory,
    isLoadingProductCategories,
    filtros,
    error,
  } = useSelector((state: RootState) => state.productCategory);

  const startLoadProductCategories = useCallback(async () => {
    try {
      const useCase = new GetProductCategoriesUseCase();
      const response = await useCase.execute();
      dispatch(onLoadProductCategories(response.data.records));
      return response.data.records;
    } catch (err: unknown) {
      let errorMsg = "Error actualizando el status";

      if (err instanceof AxiosError) {
        errorMsg = err.response?.data?.error?.message || errorMsg;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }

      dispatch(onSetError(errorMsg));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  }, [dispatch]);


  return {
    productCategories,
    productCategory,
    isLoadingProductCategories,
    filtros,
    error,

    startLoadProductCategories,
  };
};

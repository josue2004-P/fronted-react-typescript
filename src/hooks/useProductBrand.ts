import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState } from "@/store";
import {
  onLoadProductBrands,
  onSetError,
} from "@/store/slices/productBrandSlice";
import { GetProductBrandUseCase } from "@/application/productBrand";

import Swal from "sweetalert2";
import { AxiosError } from "axios";

export const useProductBrand = () => {
  const dispatch = useDispatch();

  const {
    productBrand,
    productBrands,
    isLoadingProductBrands,
    filtros,
    error,
  } = useSelector((state: RootState) => state.productBrand);

  const startLoadProductBrands = useCallback(async () => {
    try {
      const useCase = new GetProductBrandUseCase();
      const response = await useCase.execute();
      dispatch(onLoadProductBrands(response.data.records));
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
    productBrand,
    productBrands,
    isLoadingProductBrands,
    filtros,
    error,

    startLoadProductBrands,
  };
};

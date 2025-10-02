import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import {
  onLoadProducts,
  onSetProductFilters,
  onSetError,
} from "@/store/slices/productSlice";
import {
  GetProductsUseCase,
  GetProductsPublicUseCase,
  CreateNewProductUseCase
} from "@/application/products";
import { useCallback } from "react";

import Swal from "sweetalert2";
import { AxiosError } from "axios";
import { ProductFormValues } from "@/types/product";

export const useProduct = () => {
  const dispatch = useDispatch();
    const router = useRouter();

  const { products, product, isLoadingProducts, filtros, error } = useSelector(
    (state: RootState) => state.product
  );

const startCreateNewProduct = async (datos: ProductFormValues | FormData) => {
  try {
    const useCase = new CreateNewProductUseCase();
    const response = await useCase.execute(datos); // UseCase debe manejar FormData si es necesario
    Swal.fire({
      icon: "success",
      title: "¡Hecho!",
      text: response.message,
    }).then(() => {
      router.push("/dashboard/product");
    });
  } catch (err: unknown) {
    let errorMsg = "Error creando producto";

    if (err instanceof AxiosError) {
      errorMsg = err.response?.data?.error || errorMsg;
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
};


  const startLoadProducts = useCallback(async () => {
    try {
      const useCase = new GetProductsUseCase();
      const response = await useCase.execute();
      dispatch(onLoadProducts(response.data.records));
      dispatch(
        onSetProductFilters({
          total: response.data.total,
          page: response.data.page,
          totalPages: response.data.totalPages,
        })
      );

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

  const startLoadProductsPublic = useCallback(async () => {
    try {
      const useCase = new GetProductsPublicUseCase();
      const response = await useCase.execute();
      dispatch(onLoadProducts(response.data.records));
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
    product,
    products,
    isLoadingProducts,
    filtros,
    error,

    startLoadProducts,
    startLoadProductsPublic,
    startCreateNewProduct
  };
};

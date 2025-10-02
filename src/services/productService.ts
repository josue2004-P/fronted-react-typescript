import { axiosClient } from "@/infrastructure/api/AxiosClient";
import { ProductFormValues, ProductResponse } from "@/types/product";

export const getProductsRequest = async (): Promise<ProductResponse> => {
  const { data } = await axiosClient.get("/product");
  return data;
};

export const getProductsPublicRequest = async (): Promise<ProductResponse> => {
  const { data } = await axiosClient.get("/product-public");
  return data;
};

export const createNewProductUseCase = async (
  datos: ProductFormValues | FormData
): Promise<ProductResponse> => {
  const isFormData = datos instanceof FormData;

  const { data } = await axiosClient.post<ProductResponse>(
    "/product",
    datos,
    isFormData
      ? { headers: { "Content-Type": "multipart/form-data" } }
      : undefined
  );

  return data;
};
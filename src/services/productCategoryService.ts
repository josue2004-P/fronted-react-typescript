import { axiosClient } from "@/infrastructure/api/AxiosClient";
import { ProductCategoryResponse } from "@/types/productCategory";

export const getProductCategoriesRequest = async (): Promise<ProductCategoryResponse> => {
  const { data } = await axiosClient.get("/product-category");
  return data;
};


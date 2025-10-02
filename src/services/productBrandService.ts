import { axiosClient } from "@/infrastructure/api/AxiosClient";
import { ProductBrandResponse } from "@/types/productBrand";

export const getProductBrandsRequest = async (): Promise<ProductBrandResponse> => {
  const { data } = await axiosClient.get("/product-brand");
  return data;
};


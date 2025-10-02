import { getProductBrandsRequest } from "@/services/productBrandService";
import { ProductBrandResponse } from "@/types/productBrand";

export class GetProductBrandUseCase {
  async execute(): Promise<ProductBrandResponse> {
    return await getProductBrandsRequest(); 
  }
}

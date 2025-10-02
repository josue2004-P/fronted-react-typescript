import { getProductCategoriesRequest } from "@/services/productCategoryService";
import { ProductCategoryResponse } from "@/types/productCategory";

export class GetProductCategoriesUseCase {
  async execute(): Promise<ProductCategoryResponse> {
    return await getProductCategoriesRequest(); 
  }
}

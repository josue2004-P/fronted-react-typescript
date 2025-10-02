import { getProductsRequest } from "@/services/productService";
import { ProductResponse } from "@/types/product";

export class GetProductsUseCase {
  async execute(): Promise<ProductResponse> {
    return await getProductsRequest(); 
  }
}

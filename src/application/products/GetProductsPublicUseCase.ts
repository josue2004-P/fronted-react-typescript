import { getProductsPublicRequest } from "@/services/productService";
import { ProductResponse } from "@/types/product";

export class GetProductsPublicUseCase {
  async execute(): Promise<ProductResponse> {
    return await getProductsPublicRequest(); 
  }
}

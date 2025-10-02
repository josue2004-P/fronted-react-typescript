import { createNewProductUseCase } from "@/services/productService";
import { ProductFormValues, ProductResponse } from "@/types/product";

export class CreateNewProductUseCase {
  async execute(datos: ProductFormValues | FormData): Promise<ProductResponse> {
    return await createNewProductUseCase(datos);
  }
}

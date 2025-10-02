import { Product } from "./Product";
import { ProductFilter } from "./ProductFilter";

export interface ProductState {
  isLoadingProducts: boolean;
  products: Product[];
  product: Product | null;
  filtros: ProductFilter;
  error: string | null;
}

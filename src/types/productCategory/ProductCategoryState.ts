import { ProductCategory } from "./ProductCategory";
import { ProductCategoryFilter } from "./ProductCategoryFilter";

export interface ProductCategoryState {
  isLoadingProductCategories: boolean;
  productCategories: ProductCategory[];
  productCategory: ProductCategory | null;
  filtros: ProductCategoryFilter;
  error: string | null;
}

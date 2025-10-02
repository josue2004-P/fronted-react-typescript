import { ProductBrand } from "./ProductBrand";
import { ProductBrandFilter } from "./ProductBrandFilter";

export interface ProductBrandState {
  isLoadingProductBrands: boolean;
  productBrands: ProductBrand[];
  productBrand: ProductBrand | null;
  filtros: ProductBrandFilter;
  error: string | null;
}

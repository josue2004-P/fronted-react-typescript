import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; 
import type { ProductBrandState, ProductBrand } from "../../types/productBrand";
import type { ProductBrandFilter } from '../../types/productBrand/ProductBrandFilter';

const initialState: ProductBrandState = {
  isLoadingProductBrands: true,
  productBrands: [],
  productBrand: null,
  filtros: {},
  error: null,
};

export const productBrandSlice = createSlice({
  name: "productBrand",
  initialState,
  reducers: {
    onLoadProductBrands: (state, { payload }: PayloadAction<ProductBrand[]>) => {
      state.isLoadingProductBrands = false;
      state.productBrands = payload;
    },
    onLoadProductBrand: (state, { payload }: PayloadAction<ProductBrand | null>) => {
      state.isLoadingProductBrands = false;
      state.productBrand = payload;
    },
    onLogoutProductBrands: (state) => {
      state.isLoadingProductBrands = false;
      state.productBrands = [];
      state.productBrand = null;
    },
    onSetProductBrandsFilters: (state, { payload }: PayloadAction<ProductBrandFilter>) => {
      state.filtros = payload;
      state.isLoadingProductBrands = false;
    },
    onSetError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoadingProductBrands = false;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  onLoadProductBrands,
  onLoadProductBrand,
  onLogoutProductBrands,
  onSetProductBrandsFilters,
  onSetError,
  onClearError,
} = productBrandSlice.actions;

export default productBrandSlice.reducer;

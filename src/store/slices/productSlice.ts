import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; 
import type { ProductState, Product, ProductFilter } from "../../types/product";

const initialState: ProductState = {
  isLoadingProducts: true,
  products: [],
  product: null,
  filtros: {},
  error: null,
};

export const productSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    onLoadProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.isLoadingProducts = false;
      state.products = payload;
    },
    onLoadProduct: (state, { payload }: PayloadAction<Product | null>) => {
      state.isLoadingProducts = false;
      state.product = payload;
    },
    onLogoutProducts: (state) => {
      state.isLoadingProducts = false;
      state.products = [];
      state.product = null;
    },
    onSetProductFilters: (state, { payload }: PayloadAction<ProductFilter>) => {
      state.filtros = payload;
      state.isLoadingProducts = false;
    },
    onSetError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoadingProducts = false;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  onLoadProducts,
  onLoadProduct,
  onLogoutProducts,
  onSetProductFilters,
  onSetError,
  onClearError,
} = productSlice.actions;

export default productSlice.reducer;

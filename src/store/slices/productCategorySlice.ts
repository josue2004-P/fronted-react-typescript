import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; 
import type { ProductCategoryState, ProductCategory, ProductCategoryFilter } from "../../types/productCategory";

const initialState: ProductCategoryState = {
  isLoadingProductCategories: true,
  productCategories: [],
  productCategory: null,
  filtros: {},
  error: null,
};

export const productCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {
    onLoadProductCategories: (state, { payload }: PayloadAction<ProductCategory[]>) => {
      state.isLoadingProductCategories = false;
      state.productCategories = payload;
    },
    onLoadProductCategory: (state, { payload }: PayloadAction<ProductCategory | null>) => {
      state.isLoadingProductCategories = false;
      state.productCategory = payload;
    },
    onLogoutProductCategories: (state) => {
      state.isLoadingProductCategories = false;
      state.productCategories = [];
      state.productCategory = null;
    },
    onSetProductCategoriesFilters: (state, { payload }: PayloadAction<ProductCategoryFilter>) => {
      state.filtros = payload;
      state.isLoadingProductCategories = false;
    },
    onSetError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoadingProductCategories = false;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  onLoadProductCategories,
  onLoadProductCategory,
  onLogoutProductCategories,
  onSetProductCategoriesFilters,
  onSetError,
  onClearError,
} = productCategorySlice.actions;

export default productCategorySlice.reducer;

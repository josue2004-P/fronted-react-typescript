import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import companyReducer from "./slices/companySlice"
import productReducer from "./slices/productSlice"
import productCategoryReducer from "./slices/productCategorySlice"
import productBrandReducer from "./slices/productBrandSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    company: companyReducer,
    product: productReducer,
    productCategory: productCategoryReducer,
    productBrand: productBrandReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; 
import type { CompaniesState, Company, CompanyFilter } from "../../types/company";

const initialState: CompaniesState = {
  isLoadingCompanies: true,
  companies: [],
  company: null,
  filtros: {},
  error: null,
};

export const companiesSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    onLoadCompanies: (state, { payload }: PayloadAction<Company[]>) => {
      state.isLoadingCompanies = false;
      state.companies = payload;
    },
    onLoadCompany: (state, { payload }: PayloadAction<Company | null>) => {
      state.isLoadingCompanies = false;
      state.company = payload;
    },
    onLogoutCompanies: (state) => {
      state.isLoadingCompanies = false;
      state.companies = [];
      state.company = null;
    },
    onSetCompanyFilters: (state, { payload }: PayloadAction<CompanyFilter>) => {
      state.filtros = payload;
      state.isLoadingCompanies = false;
    },
    onSetError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoadingCompanies = false;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  onLoadCompanies,
  onLoadCompany,
  onLogoutCompanies,
  onSetCompanyFilters,
  onSetError,
  onClearError,
} = companiesSlice.actions;

export default companiesSlice.reducer;

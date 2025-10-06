// src/services/companyService.ts
import { axiosClient } from "../infrastructure/api/AxiosClient";
import type {
  CompaniesResponse,
  ChangeStatusResponse,
  CompanyCreateUpdate,
  CompanyResponse,
} from "../types/company";

export const getCompanyRequest = async (
  id: string
): Promise<CompanyResponse> => {
  const { data } = await axiosClient.get(`/companies/${id}`);
  return data;
};

export const getCompaniesRequest = async (): Promise<CompaniesResponse> => {
  const { data } = await axiosClient.get("/companies");
  return data;
};

export const changeStatusActivateCompany = async (
  id: string
): Promise<ChangeStatusResponse> => {
  const { data } = await axiosClient.put(`/companies/${id}/activate`);
  return data;
};

export const changeStatusDeactivateCompany = async (
  id: string
): Promise<ChangeStatusResponse> => {
  const { data } = await axiosClient.put(`/companies/${id}/deactivate`);
  return data;
};

export const createNewCompanyUseCase = async (
  datos: CompanyCreateUpdate
): Promise<CompaniesResponse> => {
  const { data } = await axiosClient.post<CompaniesResponse>(
    "/companies",
    datos
  );
  return data;
};

export const updateCompanyUseCase = async (
  id: string,
  datos: Partial<CompanyCreateUpdate>
): Promise<CompaniesResponse> => {
  const { data } = await axiosClient.put<CompaniesResponse>(
    `/companies/${id}`,
    datos
  );
  return data;
};

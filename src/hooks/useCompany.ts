import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import type { RootState } from "../store";
import {
  onLoadCompanies,
  onLoadCompany,
  onSetError,
} from "../store/slices/companySlice";
import {
  GetCompaniesUseCase,
  ChangeStatusCompanyUseCase,
  CreateNewCompanyUseCase,
  GetCompanyUseCase,
  UpdateCompanyUseCase,
} from "../application/company";
import type { CompanyCreateUpdate } from "../types/company";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

export const useCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { companies, company, isLoadingCompanies, filtros, error } =
    useSelector((state: RootState) => state.company);

  const startCreateNewCompany = async (datos: CompanyCreateUpdate) => {
    try {
      const useCase = new CreateNewCompanyUseCase();
      const response = await useCase.execute(datos);
      Swal.fire({
        icon: "success",
        title: "¡Hecho!",
        text: response.message,
      }).then(() => {
        navigate("/company");
      });
    } catch (err: unknown) {
      let errorMsg = "Error actualizando el status";

      if (err instanceof AxiosError) {
        errorMsg = err.response?.data?.error?.message || errorMsg;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }
      dispatch(onSetError(errorMsg));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  };

  const startLoadCompanies = useCallback(async () => {
    try {
      const useCase = new GetCompaniesUseCase();
      const response = await useCase.execute(); // CompaniesResponse
      dispatch(onLoadCompanies(response.data)); // response.data es Company[]
      return response.data;
    } catch (err: unknown) {
      let errorMsg = "Error actualizando el status";

      if (err instanceof AxiosError) {
        errorMsg = err.response?.data?.error?.message || errorMsg;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }

      dispatch(onSetError(errorMsg));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  }, [dispatch]);

  const startLoadCompany = useCallback(
    async (id: string) => {
      try {
        const useCase = new GetCompanyUseCase();
        const response = await useCase.execute(id); // CompaniesResponse
        dispatch(onLoadCompany(response.data));
      } catch (err: unknown) {
        let errorMsg = "Error actualizando el status";

        if (err instanceof AxiosError) {
          errorMsg = err.response?.data?.error?.message || errorMsg;
        } else if (err instanceof Error) {
          errorMsg = err.message;
        }

        dispatch(onSetError(errorMsg));
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMsg,
        });
      }
    },
    [dispatch]
  );

  const startChangeStatus = async (id: string, status: string) => {
    try {
      const useCase = new ChangeStatusCompanyUseCase();
      const response = await useCase.execute(id, status);
      Swal.fire({
        icon: "success",
        title: "¡Hecho!",
        text: response.message,
      }).then(() => {
        window.location.reload();
      });
    } catch (err: unknown) {
      let errorMsg = "Error actualizando el status";

      if (err instanceof AxiosError) {
        errorMsg = err.response?.data?.error?.message || errorMsg;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }

      dispatch(onSetError(errorMsg));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  };

  async function startUpdateCompany(
    companyId: string,
    data: Partial<CompanyCreateUpdate>
  ) {
    try {
      const useCase = new UpdateCompanyUseCase();
      const response = await useCase.execute(companyId, data);
      Swal.fire({
        icon: "success",
        title: "¡Hecho!",
        text: response.message,
      }).then(() => {
        window.location.reload();
      });
    } catch (err: unknown) {
      let errorMsg = "Error actualizando el status";

      if (err instanceof AxiosError) {
        errorMsg = err.response?.data?.error?.message || errorMsg;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }

      dispatch(onSetError(errorMsg));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  }

  return {
    companies,
    company,
    isLoadingCompanies,
    filtros,
    error,
    startLoadCompanies,
    startLoadCompany,
    startChangeStatus,
    startCreateNewCompany,
    startUpdateCompany,
  };
};

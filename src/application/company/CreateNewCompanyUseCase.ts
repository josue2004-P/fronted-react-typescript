import { createNewCompanyUseCase } from "@/services/companyService";
import { CompanyCreateUpdate, CompaniesResponse } from "@/types/company";

export class CreateNewCompanyUseCase {
  async execute(datos: CompanyCreateUpdate,): Promise<CompaniesResponse> {
    return await createNewCompanyUseCase(datos);
  }
}

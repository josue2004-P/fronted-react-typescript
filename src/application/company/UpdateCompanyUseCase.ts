import { updateCompanyUseCase } from "@/services/companyService";
import { CompanyCreateUpdate, CompaniesResponse } from "@/types/company";

export class UpdateCompanyUseCase {
  async execute(
    id: string,
    datos: Partial<CompanyCreateUpdate>
  ): Promise<CompaniesResponse> {
    return await updateCompanyUseCase(id, datos);
  }
}

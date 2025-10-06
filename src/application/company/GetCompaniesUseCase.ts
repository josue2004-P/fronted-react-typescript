import { getCompaniesRequest } from "../../services/companyService";
import type{ CompaniesResponse } from "../../types/company";

export class GetCompaniesUseCase {
  async execute(): Promise<CompaniesResponse> {
    return await getCompaniesRequest(); 
  }
}

import { getCompaniesRequest } from "@/services/companyService";
import { CompaniesResponse } from "@/types/company";

export class GetCompaniesUseCase {
  async execute(): Promise<CompaniesResponse> {
    return await getCompaniesRequest(); 
  }
}

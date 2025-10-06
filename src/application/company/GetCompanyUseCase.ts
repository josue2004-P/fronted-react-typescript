import type { CompanyResponse } from "../../types/company";

import { getCompanyRequest } from "../../services/companyService";

export class GetCompanyUseCase {
  async execute(id: string): Promise<CompanyResponse> {
    return await getCompanyRequest(id);
  }
}

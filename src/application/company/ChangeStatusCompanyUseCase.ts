import {
  changeStatusActivateCompany,
  changeStatusDeactivateCompany,
} from "@/services/companyService";
import { ChangeStatusResponse } from "@/types/company";

export class ChangeStatusCompanyUseCase {
  async execute(id: string, status: string): Promise<ChangeStatusResponse> {
    if (status === "active") {
      return await changeStatusDeactivateCompany(id);
    }
    return await changeStatusActivateCompany(id);
  }
}

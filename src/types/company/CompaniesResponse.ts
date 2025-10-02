import type { Company } from "./Company";

export interface CompaniesResponse {
  message: string;
  data: Company[];
}


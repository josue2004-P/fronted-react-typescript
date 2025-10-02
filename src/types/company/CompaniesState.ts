import { Company } from "./Company";
import { CompanyFilter } from "./CompanyFilter";
export interface CompaniesState {
  isLoadingCompanies: boolean;
  companies: Company[];
  company: Company | null;
  filtros: CompanyFilter[];
  error: string | null;
}

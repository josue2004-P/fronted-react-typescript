import type { Company} from "./Company";
import type { CompanyFilter } from "./CompanyFilter";

export interface CompaniesState {
  isLoadingCompanies: boolean;
  companies: Company[];
  company: Company | null;
  filtros: CompanyFilter;
  error: string | null;
}

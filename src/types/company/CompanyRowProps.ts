import type { Company } from "./Company";

export type CompanyRowProps = {
  company: Company
  formatDate: (date: string) => string;
  onToggleStatus?: (id: string) => void;
};
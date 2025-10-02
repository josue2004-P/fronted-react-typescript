import type { Company } from "./Company";

export type CompaniesTableProps = {
  companies: Company[];
  formatDate: (date: string) => string;
  onToggleStatus?: (id: string) => void;
};
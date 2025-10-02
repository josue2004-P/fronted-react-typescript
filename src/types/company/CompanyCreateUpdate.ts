
export type CompanyCreateUpdate = {
  id?: string | number;
  name: string;
  legalName: string;
  databaseName: string;
  status: "active" | "inactive";
};
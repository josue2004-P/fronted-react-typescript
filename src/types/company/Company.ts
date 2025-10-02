export interface Company {
  _id: string;
  name: string;
  legalName: string;
  databaseName: string;
  registrationDate: string;
  status: "active" | "inactive";
  __v?: number;
}

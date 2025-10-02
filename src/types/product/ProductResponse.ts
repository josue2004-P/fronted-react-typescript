import { Product } from './Product';

export interface ProductResponse {
  status: string;
  message: string;
  data: {
    "total" : number,
    "page" : number,
    "totalPages" : number,
    "records" : Product[]
};
}


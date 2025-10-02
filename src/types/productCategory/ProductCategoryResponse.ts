import { ProductCategory } from './ProductCategory';

export interface ProductCategoryResponse {
  status: string;
  message: string;
  data: {
    "total" : number,
    "page" : number,
    "totalPages" : number,
    "records" : ProductCategory[]
};
}


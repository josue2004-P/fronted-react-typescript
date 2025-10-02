import { ProductBrand } from './ProductBrand';

export interface ProductBrandResponse {
  status: string;
  message: string;
  data: {
    "total" : number,
    "page" : number,
    "totalPages" : number,
    "records" : ProductBrand[]
};
}


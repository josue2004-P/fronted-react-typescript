export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  path:string;
  categoryId: number;
  brandId: number;
  userCreateId: number;
}

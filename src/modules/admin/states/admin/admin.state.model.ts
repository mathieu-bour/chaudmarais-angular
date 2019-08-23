import {Product} from '../../../api/models/product';

export interface AdminStateModel {
  page: number;
  perPage: number;
  total: number;
  products: Product[];
  editingProduct: Product;
}

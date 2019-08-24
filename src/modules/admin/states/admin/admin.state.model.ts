import {Product} from '../../../api/models/product';
import {Stock} from '../../../api/models/stock';

export interface AdminStateModel {
  page: number;
  perPage: number;
  total: number;
  products: Product[];
  editingProduct: Product;
  editingStocks: Stock[];
}

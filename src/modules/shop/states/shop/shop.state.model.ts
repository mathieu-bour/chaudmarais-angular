import {Stock} from '../../../api/models/stock';
import {Product} from '../../../api/models/product';

export interface ShopStateModel {
  // Cache
  products: Product[];
  stocks: Stock[];

  currentProduct?: Product;
  currentProductStocks?: Stock[];
  currentStock?: Stock;

  cart: { quantity: number, stock: Stock, product: Product }[];
}

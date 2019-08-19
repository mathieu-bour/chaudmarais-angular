import {Stock} from '../../../api/models/stock';
import {Product} from '../../../api/models/product';

export interface CartItem {
  quantity: number;
  stock: Stock;
  product: Product;
}

export type Cart = CartItem[];

export interface ShopStateModel {
  // Cache
  products: Product[];
  stocks: Stock[];

  currentProduct?: Product;
  currentProductStocks?: Stock[];
  currentStock?: Stock;

  cart: Cart;
}

import {Product} from '../../../api/models/product';
import {Stock} from '../../../api/models/stock';
import {StateContext} from '@ngxs/store';

export interface CartItem {
  quantity: number;
  stock: Stock;
  product: Product;
}

export type Cart = CartItem[];

export interface Shipping {
  name: string;
  price: number;
}

export interface CartStateModel {
  items: Cart;
  shipping: Shipping;
}

export type CartStateContext = StateContext<CartStateModel>;

import {Stock} from './stock';
import {Product} from './product';
import {Address} from './address';

export type OrderStatus = 'paid' | 'fulfilled';

export interface Order {
  id: number;
  status: OrderStatus;
  subtotal: number;
  shipping_price: number;
  total: number;
  content: {
    quantity: number,
    stock: Stock,
    product: Product
  }[];
  shipping: Address;
  receipt_url: string;
  stripe_id: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

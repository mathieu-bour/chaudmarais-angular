import {Stock} from './stock';
import {Product} from './product';
import {Address} from './address';

export interface Order {
  id: number;
  status: 'paid';
  stripe_id: string;
  receipt_url: string;
  address: Address;
  content: {
    quantity: number,
    stock: Stock,
    product: Product
  }[];
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

import {Stock} from '../../../api/models/stock';
import {Product} from '../../../api/models/product';
import {StateContext} from '@ngxs/store';

export interface ShopStateModel {
  currentProduct?: Product;
  currentProductStocks?: Stock[];
  currentStock?: Stock;
}

export type ShopStateContext = StateContext<ShopStateModel>;

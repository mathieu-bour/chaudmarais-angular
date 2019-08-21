import {Stock} from '../../../api/models/stock';
import {Product} from '../../../api/models/product';


export class SetCartQuantity {
  static readonly type = '[Cart] SetCartQuantity';

  constructor(public stock: Stock, public product: Product, public quantity: number) {
  }
}

export class AddToCart {
  static readonly type = '[Cart] AddStockToCart';

  constructor(public stock: Stock, public product: Product) {
  }
}

export class RemoveFromCart {
  static readonly type = '[Cart] RemoveStockFromCart';

  constructor(public stock: Stock) {
  }
}

import {Product} from '../../../api/models/product';
import {Stock} from '../../../api/models/stock';


export class SetCurrentProductId {
  static readonly type = '[Products] SetCurrentProductId';

  constructor(public productId: number) {
  }
}

export class SetCurrentProduct {
  static readonly type = '[Products] SetCurrentProduct';

  constructor(public product: Product) {
  }
}

export class SetCurrentStockId {
  static readonly type = '[Stocks] SetCurrentStockId';

  constructor(public stockId: number) {
  }
}

export class SetCurrentStock {
  static readonly type = '[Stock] SetCurrentStock';

  constructor(public stock: Stock) {
  }
}

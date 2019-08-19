import {Product} from '../../../api/models/product';
import {Stock} from '../../../api/models/stock';

export class GetProducts {
  static readonly type = '[Product API] GetProducts';

  constructor(public page: number, public perPage: number) {
  }
}

export class GetProduct {
  static readonly type = '[Products API] GetProduct';

  constructor(public productId: number) {
  }
}

export class GetProductStocks {
  static readonly type = '[Products API] GetProductStocks';

  constructor(public productId: number) {
  }
}

export class GetStock {
  static readonly type = '[Stock API] GetStock';

  constructor(public stockId: number) {
  }
}

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

export class SetCartQuantity {
  static readonly type = '[Cart] SetCartQuantity';

  constructor(public stock: Stock, public product: Product, public quantity: number) {
  }
}

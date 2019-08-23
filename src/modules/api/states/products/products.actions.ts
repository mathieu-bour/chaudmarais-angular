import {Product} from '../../models/product';

export class CacheProducts {
  static readonly type = '[Product API] GetProducts';

  constructor(public products: Product[]) {
  }
}

export class IndexProducts {
  static readonly type = '[Product API] GetProducts';

  constructor(public page: number, public perPage: number) {
  }
}

export class IndexEnabledProducts {
  static readonly type = '[Products API] IndexEnabledProducts';

  constructor(public page: number, public perPage: number) {
  }
}

export class GetProduct {
  static readonly type = '[Products API] GetProduct';

  constructor(public productId: number) {
  }
}

export class PatchProduct {
  static readonly type = '[Products API] PatchProduct';

  constructor(public product: Product) {
  }
}

export class GetProductStocks {
  static readonly type = '[Products API] GetProductStocks';

  constructor(public productId: number) {
  }
}

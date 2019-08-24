import {Product} from '../../../api/models/product';

export class LoadProducts {
  static readonly type = '[Admin] LoadProducts';

  constructor(public page: number, public perPage: number) {
  }
}

export class EditProduct {
  static readonly type = '[Admin] EditProduct';

  constructor(public product: Product) {
  }
}

export class EditStocks {
  static readonly type = '[Admin] EditStocks';

  constructor(public productID: number) {
  }
}

export class ClearStocks {
  static readonly type = '[Admin] ClearStocks';

  constructor() {
  }
}


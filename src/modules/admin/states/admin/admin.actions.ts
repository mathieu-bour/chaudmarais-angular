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

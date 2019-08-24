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

export class SetPage {
  static readonly type = '[Admin] SetPage';

  constructor(public page: number) {
  }
}


export class SetPerPage {
  static readonly type = '[Admin] SetPerPage';

  constructor(public perPage: number) {
  }
}

export class SetTotal {
  static readonly type = '[Admin] SetTotal';

  constructor(public total: number) {
  }
}


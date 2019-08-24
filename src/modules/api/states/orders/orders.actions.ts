import {Order} from '../../models/order';

export class CacheOrders {
  static readonly type = '[Orders API] CacheOrders';

  constructor(public orders: Order[]) {
  }
}

export class GetLoggedUserOrders {
  static readonly type = '[Orders API] GetLoggedUserOrders';
}

export class IndexOrders {
  static readonly type = '[Orders API] IndexOrders';

  constructor(public page: number, public perPage: number) {
  }
}

export class IndexPaidOrders {
  static readonly type = '[Orders API] IndexPaidOrders';

  constructor(public page: number, public perPage: number) {
  }
}

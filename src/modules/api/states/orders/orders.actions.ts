import {Order} from '../../models/order';

export class CacheOrders {
  static readonly type = '[Orders API] CacheOrders';

  constructor(public orders: Order[]) {
  }
}

export class GetLoggedUserOrders {
  static readonly type = '[Orders API] GetLoggedUserOrders';
}

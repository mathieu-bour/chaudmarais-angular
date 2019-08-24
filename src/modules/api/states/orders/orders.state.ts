import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Order} from '../../models/order';
import {CacheOrders, GetLoggedUserOrders, IndexOrders, IndexPaidOrders} from './orders.actions';
import {UsersClient} from '../../clients/users/users.client';
import {AddressesStateContext} from '../addresses/addresses.state';
import {BaseState} from '../base/base.state';
import {first} from 'rxjs/operators';
import {OrdersClient} from '../../clients/orders/orders.client';

export type OrdersStateContext = StateContext<Order[]>;

@State<Order[]>({
  name: 'orders',
  defaults: []
})
export class OrdersState extends BaseState {
  constructor(
    private store: Store,
    private ordersClient: OrdersClient,
    private usersClient: UsersClient
  ) {
    super();
  }

  @Selector()
  static paid(state: Order[]) {
    return state.filter(o => o.status === 'paid');
  }

  @Action(CacheOrders)
  cacheOrders(ctx: AddressesStateContext, {orders}: CacheOrders) {
    this.cache(ctx, orders);
  }

  @Action(GetLoggedUserOrders)
  getLoggedUserOrders(ctx: OrdersStateContext) {
    const userId = this.store.snapshot().auth.user.id;
    this.usersClient.orders(userId).pipe(first()).subscribe(response => {
      ctx.dispatch(new CacheOrders(response.data));
    });
  }

  @Action(IndexOrders)
  async indexOrders(ctx: OrdersStateContext, {page, perPage}: IndexOrders) {
    const response = await this.ordersClient.index(page, perPage);
    this.cache(ctx, response.data);
  }

  @Action(IndexPaidOrders)
  async indexPaidOrders(ctx: OrdersStateContext, {page, perPage}: IndexPaidOrders) {
    const response = await this.ordersClient.indexPaid(page, perPage);
    this.cache(ctx, response.data);
  }
}

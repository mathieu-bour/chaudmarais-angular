import {Action, State, StateContext, Store} from '@ngxs/store';
import {Order} from '../../models/order';
import {CacheOrders, GetLoggedUserOrders} from './orders.actions';
import {UsersClient} from '../../clients/users/users.client';
import {AddressesStateContext} from '../addresses/addresses.state';
import {BaseState} from '../base/base.state';
import {first} from 'rxjs/operators';

export type OrdersStateContext = StateContext<Order[]>;

@State<Order[]>({
  name: 'orders',
  defaults: []
})
export class OrdersState extends BaseState {
  constructor(
    private store: Store,
    private usersClient: UsersClient
  ) {
    super();
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
}

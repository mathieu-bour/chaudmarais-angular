import {Action, State, StateContext, Store} from '@ngxs/store';
import {AddressesClient} from '../../clients/addresses/addresses.client';
import {CacheAddresses, GetUserAddresses, PostAddress} from './addresses.actions';
import {GetLoggedUserAddresses} from '../users/users.actions';
import {Address} from '../../models/address';
import {BaseState} from '../base/base.state';

export type AddressesStateContext = StateContext<Address[]>;

@State<Address[]>({
  name: 'addresses',
  defaults: []
})
export class AddressesState extends BaseState {
  constructor(
    private store: Store,
    private addressesClient: AddressesClient
  ) {
    super();
  }

  @Action(CacheAddresses)
  cacheStocks(ctx: AddressesStateContext, {addresses}: CacheAddresses) {
    this.cache(ctx, addresses);
  }

  @Action(PostAddress)
  postAddress(ctx: AddressesStateContext, {data}: PostAddress) {
    if (!data.hasOwnProperty('user_id')) {
      data.user_id = this.store.snapshot().auth.user.id;
    }

    return this.addressesClient.post(data);
  }

  @Action(GetLoggedUserAddresses)
  getLoggedUserAddresses(ctx: AddressesStateContext, {page, perPage}: GetLoggedUserAddresses) {
    const userId = this.store.snapshot().auth.user.id;
    return ctx.dispatch(new GetUserAddresses(userId, page, perPage));
  }
}

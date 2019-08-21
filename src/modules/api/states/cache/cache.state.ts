import {Action, Selector, State, Store} from '@ngxs/store';
import {CacheStateContext, CacheStateModel} from './cache.state.model';
import {AddNewAddress, GetUserAddresses} from './actions/addresses.actions';
import {UsersClient} from '../../clients/users/users.client';
import {AddressesClient} from '../../clients/addresses/addresses.client';
import {append, patch} from '@ngxs/store/operators';

@State<CacheStateModel>({
  name: 'cache',
  defaults: {
    addresses: []
  }
})
export class CacheState {
  constructor(
    private store: Store,
    private usersClient: UsersClient,
    private addressesClient: AddressesClient
  ) {
  }

  @Action(AddNewAddress)
  async addNewAddress(ctx: CacheStateContext, {userId, name, line1, line2, postalCode, city, country}: AddNewAddress) {
    await this.addressesClient.post({user_id: userId, name, line1, line2, postal_code: postalCode, city, country});
    return ctx.dispatch(new GetUserAddresses(userId));
  }

  @Action(GetUserAddresses)
  async getUserAddresses(ctx: CacheStateContext, {userId, page, perPage}: GetUserAddresses) {
    console.log(userId);
    const freshAddresses = (await this.usersClient.addresses(userId, page, perPage).toPromise()).data;
    const cachedAddresses = ctx.getState().addresses.filter(p => {
      return freshAddresses.findIndex(product => p.id === product.id) === -1;
    });

    ctx.patchState({
      addresses: [...cachedAddresses, ...freshAddresses]
    });
  }
}

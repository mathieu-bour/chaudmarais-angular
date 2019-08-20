import {Action, Selector, State, Store} from '@ngxs/store';
import {CacheStateContext, CacheStateModel} from './cache.state.model';
import {GetUserAddresses} from './actions/addresses.actions';
import {UsersClient} from '../../clients/users/users.client';

@State<CacheStateModel>({
  name: 'cache',
  defaults: {
    addresses: []
  }
})
export class CacheState {
  constructor(
    private store: Store,
    private usersClient: UsersClient
  ) {
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

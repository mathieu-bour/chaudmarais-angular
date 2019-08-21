import {Action, State, StateContext, Store} from '@ngxs/store';
import {PatchUser, PostUser} from './users.actions';
import {UsersClient} from '../../clients/users/users.client';
import {BaseState} from '../base/base.state';
import {CacheAddresses, GetUserAddresses} from '../addresses/addresses.actions';
import {User} from '../../models/user';

export type UsersStateContext = StateContext<User[]>;

@State<User[]>({
  name: 'users',
  defaults: []
})
export class UsersState extends BaseState {
  constructor(
    private store: Store,
    private usersClient: UsersClient
  ) {
    super();
  }

  @Action(PostUser)
  async postUser(ctx: UsersStateContext, {data}: PostUser) {
    await this.usersClient.post(data);
  }


  @Action(PatchUser)
  async patchUser(ctx: UsersStateContext, {userId, data}: PatchUser) {
    await this.usersClient.patch(userId, data);
  }


  @Action(GetUserAddresses)
  async getUserAddresses(ctx: UsersStateContext, {userId, page, perPage}: GetUserAddresses) {
    const freshAddresses = (await this.usersClient.addresses(userId, page, perPage).toPromise()).data;
    this.store.dispatch(new CacheAddresses(freshAddresses));
  }
}

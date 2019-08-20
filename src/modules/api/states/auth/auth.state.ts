import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AuthStateModel} from './auth.state.model';
import {GetLoggedUser, Login} from './auth.state.actions';
import {AuthClient} from '../../clients/auth/auth.client';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UsersClient} from '../../clients/users/users.client';

type AuthStateContext = StateContext<AuthStateModel>;

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    token_payload: null,
    user: null
  }
})
export class AuthState {
  private jwtHelper: JwtHelperService;

  constructor(
    private authClient: AuthClient,
    private usersClient: UsersClient
  ) {
    this.jwtHelper = new JwtHelperService(); // Standalone usage, see https://github.com/auth0/angular2-jwt
  }

  @Selector()
  static loggedUser(state: AuthStateModel) {
    return state.user;
  }

  @Action(Login)
  async login(ctx: AuthStateContext, {email, password}: Login) {
    const response = await this.authClient.login(email, password).toPromise();
    const token = response.data.token;
    const tokenPayload = this.jwtHelper.decodeToken(token);

    ctx.patchState({
      token,
      token_payload: tokenPayload
    });

    return ctx.dispatch(new GetLoggedUser());
  }

  @Action(GetLoggedUser)
  async getLoggedUser(ctx: AuthStateContext) {
    const state = ctx.getState();

    if (state.token_payload) {
      const response = await this.usersClient.get(ctx.getState().token_payload.sub);

      ctx.patchState({
        user: response.data
      });
    }
  }
}

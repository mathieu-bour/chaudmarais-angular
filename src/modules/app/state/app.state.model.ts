import {StateContext} from '@ngxs/store';
import {CartStateModel} from '../../shop/states/cart/cart.state.model';

export interface AppStateModel {
  grpd: boolean;
}

export type AppStateContext = StateContext<AppStateModel>

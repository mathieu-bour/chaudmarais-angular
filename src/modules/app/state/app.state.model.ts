import {StateContext} from '@ngxs/store';

export interface AppStateModel {
  grpd: boolean;
}

export type AppStateContext = StateContext<AppStateModel>

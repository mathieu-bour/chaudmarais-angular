import {Address} from '../../models/address';
import {StateContext} from '@ngxs/store';

export interface CacheStateModel {
  addresses: Address[];
}
export type CacheStateContext = StateContext<CacheStateModel>;


import {Action, State, StateContext} from '@ngxs/store';
import {BaseState} from '../base/base.state';
import {CacheStocks, GetStock, PatchStock} from './stocks.actions';
import {StocksClient} from '../../clients/stocks/stocks.client';
import {Stock} from '../../models/stock';

export type StocksStateContext = StateContext<Stock[]>;

@State<Stock[]>({
  name: 'stocks',
  defaults: []
})
export class StocksState extends BaseState {
  constructor(
    private stocksClient: StocksClient
  ) {
    super();
  }

  @Action(CacheStocks)
  cacheStocks(ctx: StocksStateContext, {stocks}: CacheStocks) {
    this.cache(ctx, stocks);
  }

  @Action(GetStock)
  async getStock(ctx: StocksStateContext, {stockId}: GetStock) {
    const freshStock = await this.stocksClient.get(stockId);
    this.cache(ctx, [freshStock]);
  }

  @Action(PatchStock)
  async patchStock(ctx: StocksStateContext, {stockId, data}: PatchStock) {
    const freshStock = await this.stocksClient.patch(stockId, data);
    this.cache(ctx, [freshStock]);
  }
}

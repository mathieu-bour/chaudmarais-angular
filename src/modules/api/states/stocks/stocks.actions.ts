import {Stock} from '../../models/stock';

export class CacheStocks {
  static readonly type = '[Stocks API] CacheStocks';

  constructor(public stocks: Stock[]) {
  }
}

export class GetStock {
  static readonly type = '[Stock API] GetStock';

  constructor(public stockId: number) {
  }
}

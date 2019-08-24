import {Action, State, Store} from '@ngxs/store';
import {ShopStateContext, ShopStateModel} from './shop.state.model';
import {SetCurrentProduct, SetCurrentProductId, SetCurrentStock, SetCurrentStockId} from './shop.actions';
import {Product} from '../../../api/models/product';
import {Stock} from '../../../api/models/stock';
import {GetProduct, GetProductStocks} from '../../../api/states/products/products.actions';
import {GetStock} from '../../../api/states/stocks/stocks.actions';

@State<ShopStateModel>({
  name: 'shop',
  defaults: {
    currentProduct: null,
    currentProductStocks: [],
    currentStock: null
  }
})
export class ShopState {
  constructor(private store: Store) {
  }

  findInCache<T = any>(ctx: ShopStateContext, cacheKey: string, value: any, primaryKey: string = 'id'): T {
    const store = this.store.snapshot();
    if (!store[cacheKey]) {
      throw new Error(`Cache ${cacheKey} key does not exists in ShopState`);
    }

    const cache: T[] = store[cacheKey];
    return cache.find(item => item[primaryKey] === value);
  }

  @Action(SetCurrentProductId)
  async setCurrentProductById(ctx: ShopStateContext, {productId}: SetCurrentProductId) {
    let product = this.findInCache<Product>(ctx, 'products', productId);

    if (!product) {
      await this.store.dispatch(new GetProduct(productId)).toPromise();
      product = this.findInCache<Product>(ctx, 'products', productId);
    }

    return ctx.dispatch(new SetCurrentProduct(product));
  }

  @Action(SetCurrentProduct)
  async setCurrentProduct(ctx: ShopStateContext, {product}: SetCurrentProduct) {
    let productStocks = this.store.snapshot().stocks.filter(s => s.product_id === product.id);

    if (productStocks.length === 0) {
      await this.store.dispatch(new GetProductStocks(product.id));
      productStocks = this.store.snapshot().stocks.filter(s => s.product_id === product.id);
    }

    ctx.patchState({
      currentProduct: product,
      currentProductStocks: productStocks
    });
  }


  @Action(SetCurrentStockId)
  async setCurrentStockId(ctx: ShopStateContext, {stockId}: SetCurrentStockId) {
    let stock = this.findInCache<Stock>(ctx, 'stocks', stockId);

    if (!stock) {
      await this.store.dispatch(new GetStock(stockId)).toPromise();
      stock = this.findInCache<Stock>(ctx, 'stocks', stockId);
    }

    return ctx.dispatch(new SetCurrentStock(stock));
  }

  @Action(SetCurrentStock)
  setCurrentStock(ctx: ShopStateContext, {stock}: SetCurrentStock) {
    ctx.patchState({
      currentStock: stock
    });
  }
}

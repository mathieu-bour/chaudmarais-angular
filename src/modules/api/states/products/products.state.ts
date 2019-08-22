import {Action, State, StateContext, Store} from '@ngxs/store';
import {ProductsClient} from '../../clients/products/products.client';
import {CacheStocks} from '../stocks/stocks.actions';
import {BaseState} from '../base/base.state';
import {GetProduct, GetProductStocks, IndexEnabledProducts, IndexProducts} from './products.actions';
import {Product} from '../../models/product';

export type ProductsStateContext = StateContext<Product[]>;

@State<Product[]>({
  name: 'products',
  defaults: []
})
export class ProductsState extends BaseState {
  constructor(
    private store: Store,
    private productsClient: ProductsClient
  ) {
    super();
  }


  @Action(IndexProducts)
  async indexProducts(ctx: ProductsStateContext, {page, perPage}: IndexProducts) {
    const freshProducts = (await this.productsClient.index(page, perPage)).data;
    this.cache(ctx, freshProducts);
  }

  @Action(IndexEnabledProducts)
  async indexEnabledProducts(ctx: ProductsStateContext, {page, perPage}: IndexProducts) {
    const freshProducts = (await this.productsClient.indexEnabled(page, perPage)).data;
    this.cache(ctx, freshProducts);
  }

  @Action(GetProduct)
  async getProduct(ctx: ProductsStateContext, {productId}: GetProduct) {
    const freshProduct = (await this.productsClient.get(productId)).data;
    this.cache(ctx, [freshProduct]);
  }

  @Action(GetProductStocks)
  async getProductStocks(ctx: ProductsStateContext, {productId}: GetProductStocks) {
    const stocks = (await this.productsClient.getStocks(productId)).data;
    this.store.dispatch(new CacheStocks(stocks));
  }
}

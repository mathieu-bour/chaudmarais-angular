import {Action, State, StateContext} from '@ngxs/store';
import {ShopStateModel} from './shop.state.model';
import {
  AddToCart,
  GetProduct,
  GetProducts,
  GetProductStocks,
  GetStock,
  SetCurrentProduct,
  SetCurrentProductId,
  SetCurrentStock,
  SetCurrentStockId
} from './shop.actions';
import {ProductsClient} from '../../../api/clients/products/products.client';
import {Product} from '../../../api/models/product';
import {StocksClient} from '../../../api/clients/stocks/stocks.client';
import {Stock} from '../../../api/models/stock';
import {append, patch, updateItem} from '@ngxs/store/operators';

type ShopStateContext = StateContext<ShopStateModel>;

@State<ShopStateModel>({
  name: 'shop',
  defaults: {
    products: [],
    stocks: [],
    currentProduct: null,
    currentProductStocks: [],
    currentStock: null,
    cart: [],
  }
})
export class ShopState {
  constructor(
    private productsClient: ProductsClient,
    private stocksClient: StocksClient,
  ) {
  }

  findInCache<T = any>(ctx: ShopStateContext, cacheKey: string, value: any, primaryKey: string = 'id'): T {
    const state = ctx.getState();
    if (!state[cacheKey]) {
      throw new Error(`Cache ${cacheKey} key does not exists in ShopState`);
    }

    const cache: T[] = state[cacheKey];
    return cache.find(item => item[primaryKey] === value);
  }


  @Action(GetProducts)
  async getProducts(ctx: ShopStateContext, {page, perPage}: GetProducts) {
    const freshProducts = (await this.productsClient.index(page, perPage)).data;
    const cachedProducts = ctx.getState().products.filter(p => {
      return freshProducts.findIndex(product => p.id === product.id) === -1;
    });

    ctx.patchState({
      products: [...cachedProducts, ...freshProducts]
    });
  }

  @Action(GetProduct)
  async getProductById(ctx: ShopStateContext, {productId}: GetProduct) {
    if (this.findInCache<Product>(ctx, 'products', productId)) {
      return;
    }

    const product = (await this.productsClient.get(productId)).data;

    ctx.patchState({
      products: [
        ...ctx.getState().products,
        product
      ]
    });
  }

  @Action(GetProductStocks)
  async getProductStocks(ctx: ShopStateContext, {productId}: GetProductStocks) {
    const state = ctx.getState();
    const stocks = (await this.productsClient.getStocks(productId)).data
      .filter((stock) => {
        return state.stocks.findIndex(s => s.id === stock.id) === -1;
      });

    console.log(stocks);

    ctx.patchState({
      stocks: [
        ...state.stocks,
        ...stocks
      ]
    });
  }

  @Action(SetCurrentProductId)
  async setCurrentProductById(ctx: ShopStateContext, {productId}: SetCurrentProductId) {
    let product = this.findInCache<Product>(ctx, 'products', productId);

    if (!product) {
      await ctx.dispatch(new GetProduct(productId)).toPromise();
      product = this.findInCache<Product>(ctx, 'products', productId);
    }

    return ctx.dispatch(new SetCurrentProduct(product));
  }

  @Action(SetCurrentProduct)
  async setCurrentProduct(ctx: ShopStateContext, {product}: SetCurrentProduct) {
    let productStocks = ctx.getState().stocks.filter(s => s.product_id === product.id);

    if (productStocks.length === 0) {
      await ctx.dispatch(new GetProductStocks(product.id));
      productStocks = ctx.getState().stocks.filter(s => s.product_id === product.id);
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
      await ctx.dispatch(new GetStock(stockId)).toPromise();
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

  @Action(AddToCart)
  addToCart(ctx: ShopStateContext, {stock, product}: AddToCart) {
    const index = ctx.getState().cart.findIndex(line => line.stock.id === stock.id);
    const newLine = {
      quantity: index !== -1 ? ctx.getState().cart[index].quantity + 1 : 1,
      stock,
      product
    };

    console.log(newLine, index);

    if (index === -1) {
      ctx.setState(
        patch({
          cart: append([newLine])
        })
      );
    } else {
      ctx.setState(
        patch({
          cart: updateItem(line => line.stock.id === stock.id, newLine)
        })
      );
    }
  }
}

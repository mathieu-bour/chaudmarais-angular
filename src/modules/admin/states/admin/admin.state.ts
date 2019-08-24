import {Action, State, StateContext, Store} from '@ngxs/store';
import {AdminStateModel} from './admin.state.model';
import {ClearStocks, EditProduct, EditStocks, LoadProducts} from './admin.actions';
import {ProductsClient} from '../../../api/clients/products/products.client';
import {CacheProducts, GetProductStocks} from '../../../api/states/products/products.actions';

type AdminStateContext = StateContext<AdminStateModel>;

@State<AdminStateModel>({
  name: 'admin',
  defaults: {
    page: 0,
    perPage: 100,
    total: 0,
    products: [],
    editingProduct: null,
    editingStocks: null
  }
})
export class AdminState {
  constructor(
    private store: Store,
    private productsClient: ProductsClient
  ) {

  }

  @Action(LoadProducts)
  async loadProducts(ctx: AdminStateContext, {page, perPage}: LoadProducts) {
    const response = await this.productsClient.index(page, perPage);

    ctx.patchState({
      page: response.page,
      perPage: response.per_page,
      total: response.total,
      products: response.data
    });

    return this.store.dispatch(new CacheProducts(response.data));
  }

  @Action(EditProduct)
  editProduct(ctx: AdminStateContext, {product}: EditProduct) {
    ctx.patchState({
      editingProduct: product
    });
  }

  @Action(EditStocks)
  async editStocks(ctx: AdminStateContext, {productID}: EditStocks) {
    const stocks = (await this.productsClient.getStocks(productID)).data;
    ctx.patchState({
      editingStocks: stocks
    });
  }

  @Action(ClearStocks)
  clearStocks(ctx: AdminStateContext, {}: ClearStocks) {
    ctx.patchState({
      editingStocks: null
    });
  }
}

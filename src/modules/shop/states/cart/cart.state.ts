import {Action, Selector, State} from '@ngxs/store';
import {CartStateContext, CartStateModel} from './cart.state.model';
import {append, patch, removeItem, updateItem} from '@ngxs/store/operators';
import {AddToCart, RemoveFromCart, SetCartQuantity} from './cart.actions';

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    items: [],
    shipping: {
      name: 'Livraison standard',
      price: 630
    }
  }
})
export class CartState {
  @Selector()
  static subtotal(state: CartStateModel): number {
    return state.items.reduce((subtotal, item) => subtotal + item.stock.price * item.quantity, 0);
  }

  @Selector()
  static total(state: CartStateModel): number {
    return CartState.subtotal(state) + state.shipping.price;
  }

  @Action(SetCartQuantity)
  setCartQuantity(ctx: CartStateContext, {stock, product, quantity}: SetCartQuantity) {
    const search = line => line.stock.id === stock.id;

    if (quantity === 0) {
      ctx.setState(patch({
        items: removeItem(search)
      }));
    } else if (ctx.getState().items.findIndex(search) !== -1) {
      ctx.setState(patch({
        items: updateItem(search, {quantity, stock, product})
      }));
    } else {
      ctx.setState(patch({
        items: append([{quantity, stock, product}])
      }));
    }
  }

  @Action(AddToCart)
  addToCart(ctx: CartStateContext, {stock, product}: AddToCart) {
    const index = ctx.getState().items.findIndex(line => line.stock.id === stock.id);
    const quantity = index !== -1 ? ctx.getState().items[index].quantity + 1 : 1;

    return ctx.dispatch(new SetCartQuantity(stock, product, quantity));
  }

  @Action(RemoveFromCart)
  removeFromCart(ctx: CartStateContext, {stock}: RemoveFromCart) {
    return ctx.dispatch(new SetCartQuantity(stock, null, 0));

  }
}

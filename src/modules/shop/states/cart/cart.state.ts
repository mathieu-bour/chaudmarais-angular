import {Action, Selector, State} from '@ngxs/store';
import {CartStateContext, CartStateModel} from './cart.state.model';
import {append, patch, removeItem, updateItem} from '@ngxs/store/operators';
import {AddToCart, EmptyCart, RemoveFromCart, SetCartQuantity} from './cart.actions';

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    items: [],
    shipping: {
      name: 'Livraison standard',
      price: 250
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

  @Selector()
  static count(state: CartStateModel): number {
    return state.items.reduce((acc, item) => acc + item.quantity, 0);
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

    const hasTshirt = ctx.getState().items.reduce((prev, item) => {
      return prev || item.product.type.includes('shirt');
    }, false);

    const newShippingPrice = hasTshirt ? 630 : 250;

    ctx.patchState({
      shipping: {
        name: 'Livraison standard',
        price: newShippingPrice
      }
    });
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

  @Action(EmptyCart)
  emptyCart(ctx: CartStateContext) {
    return ctx.patchState({
      items: []
    });
  }
}

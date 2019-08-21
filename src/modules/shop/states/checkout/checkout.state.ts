import {Action, State, StateContext, Store} from '@ngxs/store';
import {CheckoutStateModel} from './checkout.state.model';
import {CreatePaymentIntent, Pay, ResetCheckout, SetComplete, SetPaymentIntent, SetShippingAddress} from './checkout.state.actions';
import {CartClient} from '../../../api/clients/cart/cart.client';
import {CartItem} from '../cart/cart.state.model';

type CheckoutStateContext = StateContext<CheckoutStateModel>;

@State<CheckoutStateModel>({
  name: 'checkout',
  defaults: {
    shippingAddress: null,
    billingAddress: null,
    paymentIntent: null,
    complete: false,
    loading: false
  }
})
export class CheckoutState {
  constructor(
    private store: Store,
    private checkoutClient: CartClient
  ) {
  }

  @Action(CreatePaymentIntent)
  async createPaymentIntent(ctx: CheckoutStateContext) {
    const items = this.store.snapshot().cart.items.map((cartItem: CartItem) => {
      return {
        stock_id: cartItem.stock.id,
        quantity: cartItem.quantity
      };
    });
    ctx.patchState({loading: true});
    const response = await this.checkoutClient.initialize(items);
    ctx.patchState({loading: false});

    return ctx.dispatch(new SetPaymentIntent(response.data));
  }

  @Action(SetShippingAddress)
  async setShippingAddress(ctx: CheckoutStateContext, {address}: SetShippingAddress) {
    ctx.patchState({loading: true});
    const setShippingAddressResponse = await this.checkoutClient.update(
      ctx.getState().paymentIntent.id,
      {
        shipping: {
          name: address.name,
          address: {
            line1: address.line1,
            line2: address.line2,
            postal_code: address.postal_code,
            city: address.city,
            country: 'FR'
          },
          phone: null,
          tracking_number: null,
          carrier: null
        }
      }
    );

    ctx.patchState({
      loading: false,
      shippingAddress: address
    });

    return ctx.dispatch(new SetPaymentIntent(setShippingAddressResponse.data));
  }

  @Action(SetPaymentIntent)
  async setPaymentIntent(ctx: CheckoutStateContext, {paymentIntent}: SetPaymentIntent) {
    ctx.patchState({
      paymentIntent
    });
  }

  @Action(SetComplete)
  setComplete(ctx: CheckoutStateContext, {complete}: SetComplete) {
    ctx.patchState({
      complete
    });
  }

  @Action(Pay)
  async pay(ctx: CheckoutStateContext, {stripe, card}: Pay) {
    const {paymentIntent} = ctx.getState();

    ctx.patchState({loading: true});
    const result = await stripe.handleCardPayment(
      paymentIntent.client_secret,
      card
    );
    ctx.patchState({loading: false});

    return ctx.dispatch(new SetPaymentIntent(result.paymentIntent));
  }

  @Action(ResetCheckout)
  resetCheckout(ctx: CheckoutStateContext) {
    ctx.setState({
      shippingAddress: null,
      billingAddress: null,
      paymentIntent: null,
      complete: false,
      loading: false
    });
  }
}
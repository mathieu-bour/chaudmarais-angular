import {Address} from '../../../api/models/address';

export interface CheckoutStateModel {
  shippingAddress: Address;
  billingAddress: Address;
  paymentIntent: stripe.paymentIntents.PaymentIntent;
  loading: boolean;
  complete: {
    cardNumber: boolean,
    cardCvc: boolean,
    cardExpiry: boolean
  };
}

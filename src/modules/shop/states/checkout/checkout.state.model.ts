import {Address} from '../../../api/models/address';

export interface CheckoutStateModel {
  shippingAddress: Address;
  billingAddress: Address;
  paymentIntent: stripe.paymentIntents.PaymentIntent;
  complete: boolean;
  loading: boolean;
}

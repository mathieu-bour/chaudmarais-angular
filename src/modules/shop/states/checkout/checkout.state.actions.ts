import {Address} from '../../../api/models/address';

export class SetShippingAddress {
  static readonly type = '[Checkout] SetShippingAddress';

  constructor(public address: Address) {
  }
}

export class SetBillingAddress {
  static readonly type = '[Checkout] SetBillingAddress';

  constructor(public address: Address) {
  }
}

export class CreatePaymentIntent {
  static readonly type = '[Checkout] CreatePaymentIntent';
}

export class SetPaymentIntent {
  static readonly type = '[Checkout] SetPaymentIntent';

  constructor(public paymentIntent: stripe.paymentIntents.PaymentIntent) {
  }
}

export class SetComplete {
  static readonly type = '[Checkout] SetComplete';

  constructor(public complete: boolean) {
  }
}

export class Pay {
  static readonly type = '[Checkout] Pay';

  constructor(public stripe: stripe.Stripe, public card: stripe.elements.Element) {
  }
}

export class ResetCheckout {
  static readonly type = '[Checkout] ResetCheckout';
}

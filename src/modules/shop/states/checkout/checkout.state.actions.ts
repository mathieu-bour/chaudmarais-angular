import {Address} from '../../../api/models/address';

export class SetShippingAddress {
  static readonly type = '[Checkout] SetShippingAddress';

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

export class OnStripeElementChange {
  static readonly type = '[Checkout] OnStripeElementChange';

  constructor(public event: {elementType: string, complete: boolean}) {
  }
}

export class SetWaiting {
  static readonly type = '[Checkout] SetComplete';

  constructor(public waiting: boolean) {
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

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Address} from '../../../api/models/address';
import {GetLoggedUserAddresses} from '../../../api/states/users/users.actions';
import {AuthState} from '../../../api/states/auth/auth.state';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {CreatePaymentIntent, OnStripeElementChange, Pay, SetShippingAddress} from '../../states/checkout/checkout.state.actions';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {CheckoutState} from '../../states/checkout/checkout.state';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  @ViewChild('cardNumber', {static: true}) cardNumberElementRef: ElementRef;
  @ViewChild('cardExpiry', {static: true}) cardExpiryElementRef: ElementRef;
  @ViewChild('cardCvc', {static: true}) cardCvcElementRef: ElementRef;

  @Select(AuthState.addresses) addresses$: Observable<Address[]>;
  @Select(store => store.checkout.loading) loading$: Observable<boolean>;
  @Select(store => store.checkout.shippingAddress) shippingAddress$: Observable<Address>;
  @Select(store => store.checkout.billingAddress$) billingAddress$: Observable<Address>;
  @Select(CheckoutState.complete) complete$: Observable<boolean>;
  @Select(store => store.checkout.complete) waiting$: Observable<boolean>;

  private stripe: stripe.Stripe;
  private elements: stripe.elements.Elements;
  private cardNumber: stripe.elements.Element;
  private cardExpiry: stripe.elements.Element;
  private cardCvc: stripe.elements.Element;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {
  }


  ngOnInit() {
    this.store.dispatch(new GetLoggedUserAddresses());

    this.stripe = Stripe(environment.stripe_pk);
    this.elements = this.stripe.elements();

    const options = {
      style: {
        base: {
          fontFamily: '\'Montserrat\', Helvetica, sans-serif',
          fontSize: '18px',
        }
      }
    };

    const onChange = ($event: any) => {
      this.store.dispatch(new OnStripeElementChange($event));
    };

    this.cardNumber = this.elements.create('cardNumber', options);
    this.cardExpiry = this.elements.create('cardExpiry', options);
    this.cardCvc = this.elements.create('cardCvc', options);

    this.cardNumber.mount(this.cardNumberElementRef.nativeElement);
    this.cardExpiry.mount(this.cardExpiryElementRef.nativeElement);
    this.cardCvc.mount(this.cardCvcElementRef.nativeElement);

    this.cardNumber.on('change', onChange);
    this.cardExpiry.on('change', onChange);
    this.cardCvc.on('change', onChange);
  }

  onStepChange($event: StepperSelectionEvent) {
    switch ($event.selectedIndex) {
      case 1:
        this.store.dispatch(new CreatePaymentIntent());
        break;
    }
  }

  onShippingAddressChange(newShippingAddress: Address) {
    if (newShippingAddress !== null) {
      this.store.dispatch(new SetShippingAddress(newShippingAddress));
    }
  }

  async onPay() {
    try {
      this.store.dispatch(new Pay(this.stripe, this.cardNumber)).subscribe(() => {
        return this.router.navigate(['paiement/commande-confirmee']);
      });
    } catch (e) {
      console.error(e);
    }
  }
}

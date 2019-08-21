import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Address} from '../../../api/models/address';
import {GetLoggedUserAddresses} from '../../../api/states/users/users.actions';
import {AuthState} from '../../../api/states/auth/auth.state';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {CreatePaymentIntent, Pay, SetComplete, SetShippingAddress} from '../../states/checkout/checkout.state.actions';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  @ViewChild('cardElement', {static: true}) cardElement: ElementRef;

  @Select(AuthState.addresses) addresses$: Observable<Address[]>;
  @Select(store => store.checkout.loading) loading$: Observable<boolean>;
  @Select(store => store.checkout.shippingAddress) shippingAddress$: Observable<Address>;
  @Select(store => store.checkout.billingAddress$) billingAddress$: Observable<Address>;
  @Select(store => store.checkout.complete) complete$: Observable<boolean>;

  private stripe: stripe.Stripe;
  private card: stripe.elements.Element;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {
  }


  ngOnInit() {
    this.store.dispatch(new GetLoggedUserAddresses());

    this.stripe = Stripe(environment.stripe_pk);

    this.card = this.stripe.elements().create('card', {
      style: {
        base: {
          fontFamily: '\'Montserrat\', Helvetica, sans-serif',
          fontSize: '18px',
        }
      }
    });
    this.card.mount(this.cardElement.nativeElement);

    this.card.on('change', ($event: any) => {
      this.store.dispatch(new SetComplete($event.complete));
    });
  }

  onStepChange($event: StepperSelectionEvent) {
    switch ($event.selectedIndex) {
      case 1:
        this.store.dispatch(new CreatePaymentIntent());
        break;
    }
  }

  onShippingAddressChange(newShippingAddress: Address) {
    this.store.dispatch(new SetShippingAddress(newShippingAddress));
  }

  async onPay() {
    try {
      this.store.dispatch(new Pay(this.stripe, this.card)).subscribe(() => {
        return this.router.navigate(['commande-confirmee']);
      });
    } catch (e) {

    }
  }
}

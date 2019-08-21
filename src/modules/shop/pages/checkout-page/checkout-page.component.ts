import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AddressesState} from '../../../api/states/addresses/addresses.state';
import {Address} from '../../../api/models/address';
import {GetLoggedUserAddresses} from '../../../api/states/users/users.actions';

declare var Stripe: stripe.StripeStatic; // : stripe.StripeStatic;

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  @ViewChild('cardElement', {static: true}) cardElement: ElementRef;
  @Select(AddressesState.userAddresses) addresses$: Observable<Address[]>;

  addressFormGroup = this.formBuilder.group({
    addressId: [null, Validators.required]
  });
  cardFormGroup = this.formBuilder.group({
    card_holder_name: null
  });

  stripe: stripe.Stripe;
  card: any;
  cardErrors: any;

  constructor(private store: Store, private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.store.dispatch(new GetLoggedUserAddresses());

    this.stripe = Stripe('pk_test_your_key');
    const elements = this.stripe.elements();

    this.card = elements.create('card');
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({error}) => {
      this.cardErrors = error && error.message;
    });
  }

  async handleForm(e) {
    e.preventDefault();

    const {source, error} = await this.stripe.createSource(this.card);
  }

}

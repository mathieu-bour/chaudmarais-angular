import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {EmptyCart} from '../../states/cart/cart.actions';
import {ResetCheckout} from '../../states/checkout/checkout.state.actions';

@Component({
  selector: 'app-order-confirmed-page',
  templateUrl: './order-confirmed-page.component.html',
  styleUrls: ['./order-confirmed-page.component.scss']
})
export class OrderConfirmedPageComponent implements OnInit {
  orderId: string;

  constructor(private store: Store) {
  }

  async ngOnInit() {
    const paymentIntentId: string = await this.store.selectOnce((store => store.checkout.paymentIntent.id)).toPromise();
    this.orderId = paymentIntentId.substr(3, 5).toUpperCase();

    this.store.dispatch([
      new EmptyCart(),
      new ResetCheckout()
    ]);
  }
}

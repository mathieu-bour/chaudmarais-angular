import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Cart, Shipping} from '../../states/cart/cart.state.model';
import {CartState} from '../../states/cart/cart.state';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  @Select(store => store.cart.items) cart$: Observable<Cart>;
  @Select(CartState.subtotal) subtotal$: Observable<number>;
  @Select(store => store.cart.shipping) shipping$: Observable<Shipping>;
  @Select(CartState.total) total$: Observable<number>;

  constructor() {
  }

  ngOnInit() {
  }

  toBePayed() {
    return (this.total$);
  }
}

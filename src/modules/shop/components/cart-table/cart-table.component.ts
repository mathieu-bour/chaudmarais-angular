import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {CartState} from '../../states/cart/cart.state';
import {Cart, Shipping} from '../../states/cart/cart.state.model';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  @Select(store => store.cart.items) cart$: Observable<Cart>;
  @Select(CartState.subtotal) subtotal$: Observable<number>;
  @Select(store => store.cart.shipping) shipping$: Observable<Shipping>;
  @Select(CartState.total) total$: Observable<number>;

  constructor() {
  }

  ngOnInit() {
  }

}

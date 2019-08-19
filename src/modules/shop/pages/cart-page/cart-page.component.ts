import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {combineLatest, Observable, of} from 'rxjs';
import {Cart} from '../../states/shop/shop.state.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  @Select(store => store.shop.cart) cart$: Observable<Cart>;
  @Select(store => store.shop.cart.reduce((sum, line) => sum + line.stock.price * line.quantity, 0))
  subtotal$: Observable<number>;

  shipping$ = of(630);

  total$ = combineLatest(this.subtotal$, this.shipping$)
    .pipe(map(([subtotal, shipping]) => subtotal + shipping));

  constructor() {
  }

  ngOnInit() {
  }

  toBePayed() {
    return (this.total$);
  }
}

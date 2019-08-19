import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Cart} from '../../states/shop/shop.state.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  @Select((store => store.shop.cart)) cart$: Observable<Cart>;

  constructor() {
  }

  ngOnInit() {
  }

}

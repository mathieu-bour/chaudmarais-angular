import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetLoggedUserOrders} from '../../../api/states/orders/orders.actions';
import {AuthState} from '../../../api/states/auth/auth.state';
import {Observable} from 'rxjs';
import {Order} from '../../../api/models/order';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {
  @Select(AuthState.orders) orders$: Observable<Order[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetLoggedUserOrders());
  }

}

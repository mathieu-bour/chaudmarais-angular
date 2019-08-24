import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {OrdersState} from '../../../api/states/orders/orders.state';
import {Observable} from 'rxjs';
import {Order} from '../../../api/models/order';
import {IndexPaidOrders} from '../../../api/states/orders/orders.actions';
import {OrdersClient} from '../../../api/clients/orders/orders.client';

@Component({
  selector: 'app-orders-paid-page',
  templateUrl: './orders-paid-page.component.html',
  styleUrls: ['./orders-paid-page.component.scss']
})
export class OrdersPaidPageComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit() {
  }

}

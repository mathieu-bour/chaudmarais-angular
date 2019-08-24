import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {Order} from '../../../api/models/order';
import {environment} from '../../../../environments/environment';
import {OrdersClient} from '../../../api/clients/orders/orders.client';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  orders: Order[] = [];
  page = 0;
  perPage = 100;
  total = 0;
  columns = ['id', 'total', 'content', 'address', 'actions'];

  constructor(private store: Store, private ordersClient: OrdersClient) {
  }

  ngOnInit() {
    this.fetch();
  }

  async fetch() {
    const response = await this.ordersClient.indexPaid(this.page, this.perPage);
    this.orders = response.data;
    this.page = response.page;
    this.perPage = response.per_page;
    this.total = response.total;
  }

  onPage($event: PageEvent) {
    this.page = $event.pageIndex;
    this.perPage = $event.pageSize;
    this.fetch().then();
  }

  stripeUrl(order: Order) {
    let url = 'https://dashboard.stripe.com';
    if (environment.stripe_pk.indexOf('/test') !== -1) {
      url += 'test/';
    }
    url += `/payments/${order.stripe_id}`;
    return url;
  }

  async patchStatus(id: number, status: string) {
    const response = await this.ordersClient.patch(id, {status});

    if (response.success) {
      alert('ok');
    }
  }

}

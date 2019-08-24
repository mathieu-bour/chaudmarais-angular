import {BaseClient} from '../base/base.client';
import {Order} from '../../models/order';
import {PaginationResponse} from '../../responses/pagination.response';
import {environment} from '../../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersClient extends BaseClient<Order> {
  constructor(protected http: HttpClient) {
    super(http, '/orders');
  }

  indexPaid(page: number, perPage: number) {
    return this.http.get<PaginationResponse<Order[]>>(`${environment.api}${this.base}/paid?page=${page}&perPage=${perPage}`)
      .toPromise()
      .then(response => this.unserialize<PaginationResponse<Order[]>>(response));
  }
}

import {Injectable} from '@angular/core';
import {BaseClient} from '../base/base.client';
import {HttpClient} from '@angular/common/http';
import {Stock} from '../../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksClient extends BaseClient<Stock> {
  constructor(protected http: HttpClient) {
    super(http, '/stocks');
  }
}

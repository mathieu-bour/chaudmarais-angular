import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {BaseClient} from '../base/base.client';
import {Product} from '../../models/product';
import {Stock} from '../../models/stock';
import {PaginationResponse} from '../../responses/pagination.response';

@Injectable({
  providedIn: 'root'
})
export class ProductsClient extends BaseClient<Product> {
  constructor(protected http: HttpClient) {
    super(http, '/products');
  }

  getStocks(id: number) {
    return this.http.get<PaginationResponse<Stock[]>>(`${environment.api}/products/${id}/stocks`).toPromise();
  }
}

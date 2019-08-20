import {BaseClient} from '../base/base.client';
import {User} from '../../models/user';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Address} from '../../models/address';
import {PaginationResponse} from '../../responses/pagination.response';

@Injectable({
  providedIn: 'root'
})
export class UsersClient extends BaseClient<User> {
  constructor(protected http: HttpClient) {
    super(http, '/users');
  }

  addresses(userId: number, page: number = 1, perPage: number = 100) {
    const url = `${environment.api}${this.base}/${userId}/addresses?page=${page}&perPage=${perPage}`;
    return this.http.get<PaginationResponse<Address[]>>(url);
  }
}

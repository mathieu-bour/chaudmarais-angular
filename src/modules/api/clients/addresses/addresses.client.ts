import {BaseClient} from '../base/base.client';
import {Address} from '../../models/address';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressesClient extends BaseClient<Address> {
  constructor(protected http: HttpClient) {
    super(http, '/addresses');
  }
}

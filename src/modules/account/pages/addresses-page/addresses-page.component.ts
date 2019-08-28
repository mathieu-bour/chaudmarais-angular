import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Address} from '../../../api/models/address';
import {first} from 'rxjs/operators';
import {GetUserAddresses, PostAddress} from '../../../api/states/addresses/addresses.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthState} from '../../../api/states/auth/auth.state';

@Component({
  selector: 'app-addresses-page',
  templateUrl: './addresses-page.component.html',
  styleUrls: ['./addresses-page.component.scss']
})
export class AddressesPageComponent implements OnInit {
  @Select(store => store.auth.user.id) userId$: Observable<number>;
  @Select(AuthState.addresses) addresses$: Observable<Address[]>;

  newAddress = new FormGroup({
    name: new FormControl('', Validators.required),
    line1: new FormControl('', Validators.required),
    line2: new FormControl(''),
    postCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required)
  });

  constructor(private store: Store) {
  }

  async ngOnInit() {
    const userId = await this.userId$.pipe(first()).toPromise();
    this.store.dispatch(new GetUserAddresses(userId));
  }
}

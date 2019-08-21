import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {combineLatest, Observable} from 'rxjs';
import {User} from '../../../api/models/user';
import {Address} from '../../../api/models/address';
import {first, map} from 'rxjs/operators';
import {AddNewAddress, GetUserAddresses} from '../../../api/states/cache/actions/addresses.actions';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-addresses-page',
  templateUrl: './addresses-page.component.html',
  styleUrls: ['./addresses-page.component.scss']
})
export class AddressesPageComponent implements OnInit {
  @Select(store => store.auth.user) user$: Observable<User>;
  @Select(store => store.auth.user.id) userId$: Observable<number>;
  @Select(store => store.cache.addresses) allAddresses$: Observable<Address[]>;
  addresses$ = combineLatest(this.user$, this.allAddresses$)
    .pipe(map(([user, allAddresses]) => allAddresses.filter(a => a.user_id === user.id)));

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

  async addAddress() {
    console.log(this.newAddress.value);
    const userId = await this.userId$.pipe(first()).toPromise();
    console.log(userId, this.newAddress.value.name);
    this.store.dispatch(
      new AddNewAddress(
        userId,
        this.newAddress.value.name,
        this.newAddress.value.line1,
        this.newAddress.value.line2,
        this.newAddress.value.postCode,
        this.newAddress.value.city,
        this.newAddress.value.country)
    );
    this.newAddress.reset();
  }
}

import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {combineLatest, Observable} from 'rxjs';
import {User} from '../../../api/models/user';
import {Address} from '../../../api/models/address';
import {first, map} from 'rxjs/operators';
import {GetUserAddresses} from '../../../api/states/cache/actions/addresses.actions';

@Component({
  selector: 'app-addresses-page',
  templateUrl: './addresses-page.component.html',
  styleUrls: ['./addresses-page.component.scss']
})
export class AddressesPageComponent implements OnInit {
  @Select(store => store.auth.user) user$: Observable<User>;
  @Select(store => store.cache.addresses) allAddresses$: Observable<Address[]>;
  addresses$ = combineLatest(this.user$, this.allAddresses$)
    .pipe(map(([user, allAddresses]) => allAddresses.filter(a => a.user_id === user.id)));

  constructor(private store: Store) {
  }

  async ngOnInit() {
    const user = await this.user$.pipe(first()).toPromise();
    this.store.dispatch(new GetUserAddresses(user.id));
  }

}

import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {Logout} from '../../../api/states/auth/auth.state.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent {
  constructor(private store: Store, private router: Router) {
  }

  logout() {
    this.store.dispatch(new Logout());
    this.router.navigate(['/']);
  }
}

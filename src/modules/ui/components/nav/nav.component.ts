import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {AuthState} from '../../../api/states/auth/auth.state';
import {LoginDialogComponent} from '../../dialogs/login-dialog/login-dialog.component';
import {MatDialog} from '@angular/material';
import {CartState} from '../../../shop/states/cart/cart.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Select(AuthState.isLogged) isLogged$: Observable<boolean>;
  @Select(CartState.count) count$: Observable<number>;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}

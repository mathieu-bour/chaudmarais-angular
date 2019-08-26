import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {AuthState} from '../../../api/states/auth/auth.state';
import {LoginDialogComponent} from '../../dialogs/login-dialog/login-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Select(AuthState.isLogged) isLogged$;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}

import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../../dialogs/login-dialog/login-dialog.component';
import {Router} from '@angular/router';
import {AuthState} from '../../../api/states/auth/auth.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Select(AuthState.isLogged) isLogged$;

  constructor(
    private router: Router,
    private store: Store,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}

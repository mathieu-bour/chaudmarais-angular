import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../../../user/components/login-dialog/login-dialog.component';
import {Router} from '@angular/router';
import {Logout} from '../../../api/states/auth/auth.state.actions';
import {AuthState} from '../../../api/states/auth/auth.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  expanded = false;
  @Select(AuthState.isLogged) isLogged$;

  constructor(
    private router: Router,
    private store: Store,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  onClick() {
    this.expanded = !this.expanded;
  }

  onAccountClick($event: MouseEvent) {
    const logged = this.store.snapshot().auth.token !== null;

    if (!logged) {
      this.dialog.open(LoginDialogComponent);
    } else {
      this.router.navigate(['compte', 'informations']);
    }
  }

  logOut() {
    this.store.dispatch(new Logout());
    this.router.navigate(['']);
  }

}

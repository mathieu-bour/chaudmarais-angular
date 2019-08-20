import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../../../user/components/login-dialog/login-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  expanded = false;

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
      this.router.navigate(['compte', 'adresses']);
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Store} from '@ngxs/store';
import {GrpdDialogComponent} from '../../../app/components/grpd-dialog/grpd-dialog.component';
import {HasClicked} from '../../../app/state/app.actions';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private dialog: MatDialog,
              private store: Store) {
  }

  async ngOnInit() {
    const value = this.store.snapshot().app.grpd;
    if (!value) {
      this.dialog.open(GrpdDialogComponent);
      this.store.dispatch(new HasClicked());
    }
  }

}

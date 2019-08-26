import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Login} from '../../../api/states/auth/auth.state.actions';
import {MatDialog, MatDialogRef} from '@angular/material';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  error = false;
  loginForm = this.formBuilder.group({
    email: 'admin@chaudmarais.fr',
    password: '123456'
  });

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  async onSubmit() {
    const {email, password} = this.loginForm.value;
    try {
      await this.store.dispatch(new Login(email, password)).toPromise();
      this.dialogRef.close();
    } catch (e) {
      this.error = true;
    }
  }

  openRegisterPage() {
    this.dialogRef.close();
    this.dialog.open(RegisterDialogComponent);
  }
}

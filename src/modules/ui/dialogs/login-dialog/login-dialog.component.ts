import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Login} from '../../../api/states/auth/auth.state.actions';
import {MatDialog, MatDialogRef} from '@angular/material';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  error = false;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  async onSubmit() {
    const {email, password} = this.loginForm.value;
    try {
      await this.store.dispatch(new Login(email, password)).toPromise();
      this.dialogRef.close();
      this.snackBar.open('Bienvenue !');
    } catch (e) {
      this.error = true;
    }
  }

  openRegisterPage() {
    this.dialogRef.close();
    this.dialog.open(RegisterDialogComponent);
  }
}

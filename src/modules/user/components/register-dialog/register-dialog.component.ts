import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../../api/states/auth/auth.state.actions';
import {MatDialog} from '@angular/material';
import {Store} from '@ngxs/store';
import {PostUser} from '../../../api/states/users/users.actions';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  registerForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  error = false;

  constructor(
    private store: Store,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  async onRegister() {
    try {
      await this.store.dispatch(new PostUser(this.registerForm.value));
      await this.store.dispatch(new Login(this.registerForm.value.email, this.registerForm.value.password)).toPromise();
      this.dialog.closeAll();
    } catch (e) {
      this.error = true;
    }
    await this.router.navigate(['']);
  }
}

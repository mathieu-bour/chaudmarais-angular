import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Login} from '../../../api/states/auth/auth.state.actions';

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

  constructor(private store: Store, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
  }

  async onSubmit() {
    const {email, password} = this.loginForm.value;
    try {
      await this.store.dispatch(new Login(email, password)).toPromise();
    } catch (e) {
      this.error = true;
    }
  }
}

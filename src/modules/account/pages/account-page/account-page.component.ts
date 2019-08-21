import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {first, last} from 'rxjs/operators';
import {User} from '../../../api/models/user';
import {PatchUser} from '../../../api/states/users/users.actions';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  @Select(store => store.auth.user) user$: Observable<User>;
  userChanges = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private store: Store, private fb: FormBuilder) {
  }

  async ngOnInit() {
    const user = await this.user$.pipe(first()).toPromise();
    this.userChanges.setValue({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: ''
    });
  }

  async updateAccountInformation() {
    this.store.dispatch(new PatchUser(1, this.userChanges.value));
  }
}

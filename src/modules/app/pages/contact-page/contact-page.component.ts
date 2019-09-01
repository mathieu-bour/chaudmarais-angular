import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  private readonly ZAPIER_ENDPOINT = 'https://hooks.zapier.com/hooks/catch/5401056/o36g74y/silent';

  frozen = false;
  contactFormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBard: MatSnackBar) {
  }

  sendToZapier() {
    this.frozen = true;
    const queryString = Object
      .keys(this.contactFormGroup.value)
      .map(key => key + '=' + this.contactFormGroup.value[key])
      .join('&');

    const headers = new HttpHeaders().set('content-type', 'text/plain');
    this.http
      .get(`${this.ZAPIER_ENDPOINT}?${queryString}`, {
        headers,
        responseType: 'text'
      })
      .subscribe(() => {
        this.contactFormGroup.reset();
        this.frozen = false;
        this.snackBard.open('Message envoyé !');
      });
  }
}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {
  private readonly ZAPIER_HOOK = 'https://hooks.zapier.com/hooks/catch/5401056/oof3wwj/';

  disabled = false;
  email: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onEnter() {
    this.http.get(`${this.ZAPIER_HOOK}?email=${this.email}`).subscribe(response => {
      // this.email = 'Merci, on vous prépare des mails bien chauds...';
      this.email = 'Merci !';
      this.disabled = true;
    });
  }
}

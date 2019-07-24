import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {CountdownComponent} from './components/countdown/countdown.component';
import {NewsletterFormComponent} from './components/newsletter-form/newsletter-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LandingPageComponent,
    CountdownComponent,
    NewsletterFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class LandingModule {
}

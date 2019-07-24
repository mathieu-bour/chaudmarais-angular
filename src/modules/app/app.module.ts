import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LandingModule} from '../landing/landing.module';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

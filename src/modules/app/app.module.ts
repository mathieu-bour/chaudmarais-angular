import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LandingModule} from '../landing/landing.module';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {ShopModule} from '../shop/shop.module';
import {APIModule} from '../api/api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // LandingModule
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

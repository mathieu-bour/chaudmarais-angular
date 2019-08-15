import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {ShopModule} from '../shop/shop.module';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {NgxsModule} from '@ngxs/store';
import {ShopState} from '../shop/states/shop/shop.state';
import {environment} from '../../environments/environment';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // LandingModule
    ShopModule,
    NgxImageZoomModule.forRoot(),
    NgxsModule.forRoot([
      ShopState
    ], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

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
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountModule} from '../account/account.module';
import {AuthState} from '../api/states/auth/auth.state';
import {CacheState} from '../api/states/cache/cache.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgxImageZoomModule.forRoot(),
    NgxsModule.forRoot([
      ShopState
    ], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    // LandingModule
    ShopModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

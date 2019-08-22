import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {ShopModule} from '../shop/shop.module';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../../environments/environment';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountModule} from '../account/account.module';
import {GrpdDialogComponent} from './components/grpd-dialog/grpd-dialog.component';
import {AppState} from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    GrpdDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgxImageZoomModule.forRoot(),
    NgxsModule.forRoot([AppState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['app', 'auth']
    }),
    // LandingModule
    ShopModule,
    AccountModule
  ],
  entryComponents: [GrpdDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

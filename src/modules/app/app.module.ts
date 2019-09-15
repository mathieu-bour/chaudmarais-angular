import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../../environments/environment';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GrpdDialogComponent} from './components/grpd-dialog/grpd-dialog.component';
import {AppState} from './state/app.state';
import {APIModule} from '../api/api.module';
import {CampaignPageComponent} from './pages/campaign-page/campaign-page.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {LegalPageComponent} from './pages/legal-page/legal-page.component';
import {ThanksPageComponent} from './pages/thanks-page/thanks-page.component';
import {BannerComponent} from '../ui/components/banner/banner.component';
import {UIModule} from '../ui/ui.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { FirstPageComponent } from './pages/first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    CampaignPageComponent,
    HistoryPageComponent,
    LegalPageComponent,
    ThanksPageComponent,
    // Dialogs
    GrpdDialogComponent,
    ContactPageComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxImageZoomModule.forRoot(),
    NgxsModule.forRoot([AppState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['app', 'auth', 'cart']
    }),
    APIModule,
    UIModule,
    FlexModule,
    ExtendedModule
  ],
  entryComponents: [GrpdDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

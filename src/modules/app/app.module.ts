import {NgModule} from '@angular/core';
import {
  ExtendedModule,
  FlexModule,
} from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsModule} from '@ngxs/store';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {environment} from '../../environments/environment';
import {APIModule} from '../api/api.module';
import {UIModule} from '../ui/ui.module';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {GrpdDialogComponent} from './components/grpd-dialog/grpd-dialog.component';
import {CampaignAidesPageComponent} from './pages/campaign-aides-page/campaign-aides-page.component';
import {CampaignPageComponent} from './pages/campaign-page/campaign-page.component';
import {CommitmentsPageComponent} from './pages/commitments-page/commitments-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {FirstPageComponent} from './pages/first-page/first-page.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {LegalPageComponent} from './pages/legal-page/legal-page.component';
import {ThanksPageComponent} from './pages/thanks-page/thanks-page.component';
import {AppState} from './state/app.state';

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
    FirstPageComponent,
    CommitmentsPageComponent,
    CampaignAidesPageComponent,
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
      key: ['app', 'auth', 'cart'],
    }),
    APIModule,
    UIModule,
    FlexModule,
    ExtendedModule,
  ],
  entryComponents: [GrpdDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

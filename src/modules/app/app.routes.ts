import {Routes} from '@angular/router';
import {LoggedGuard} from '../account/guards/logged.guard';
import {CampaignAidesPageComponent} from './pages/campaign-aides-page/campaign-aides-page.component';
import {CampaignPageComponent} from './pages/campaign-page/campaign-page.component';
import {CommitmentsPageComponent} from './pages/commitments-page/commitments-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {FirstPageComponent} from './pages/first-page/first-page.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {LegalPageComponent} from './pages/legal-page/legal-page.component';
import {ThanksPageComponent} from './pages/thanks-page/thanks-page.component';

export const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent,
  },
  {
    path: 'campagne',
    component: CampaignPageComponent,
  },
  {
    path: 'aides',
    component: CampaignAidesPageComponent,
  },
  {
    path: 'engagements',
    component: CommitmentsPageComponent,
  },
  {
    path: 'histoire',
    component: HistoryPageComponent,
  },
  {
    path: 'mentions-legales',
    component: LegalPageComponent,
  },
  {
    path: 'remerciements',
    component: ThanksPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'eshop',
    loadChildren: () => import('../shop/shop.module').then(mod => mod.ShopModule),
  },
  {
    path: 'paiement',
    loadChildren: () => import('../checkout/checkout.module').then(mod => mod.CheckoutModule),
    canActivate: [LoggedGuard],
  },
  {
    path: 'compte',
    loadChildren: () => import('../account/account.module').then(mod => mod.AccountModule),
    canActivate: [LoggedGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'eshop',
  },
];

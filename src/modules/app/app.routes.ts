import {Routes} from '@angular/router';
import {HomePageComponent} from '../shop/pages/home-page/home-page.component';
import {LegalPageComponent} from '../shop/pages/legal-page/legal-page.component';
import {ThanksPageComponent} from '../shop/pages/thanks-page/thanks-page.component';
import {ReturnPolicyPageComponent} from '../shop/pages/return-policy-page/return-policy-page.component';
import {HistoryPageComponent} from '../shop/pages/history-page/history-page.component';
import {CampaignPageComponent} from '../shop/pages/campaign-page/campaign-page.component';
import {ProductViewPageComponent} from '../shop/pages/product-view-page/product-view-page.component';
import {CartPageComponent} from '../shop/pages/cart-page/cart-page.component';
import {CheckoutPageComponent} from '../shop/pages/checkout-page/checkout-page.component';
import {OrderConfirmedPageComponent} from '../shop/pages/order-confirmed-page/order-confirmed-page.component';
import {AdminHomepageComponent} from '../admin/components/admin-homepage/admin-homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'mentions-legales',
    component: LegalPageComponent
  },
  {
    path: 'remerciements',
    component: ThanksPageComponent
  },
  {
    path: 'politique-retour',
    component: ReturnPolicyPageComponent
  },
  {
    path: 'histoire',
    component: HistoryPageComponent
  },
  {
    path: 'campagne',
    component: CampaignPageComponent
  },
  {
    path: 'produits/:slugId',
    component: ProductViewPageComponent
  },
  {
    path: 'panier',
    component: CartPageComponent
  },
  {
    path: 'paiement',
    component: CheckoutPageComponent
  },
  {
    path: 'commande-confirmee',
    component: OrderConfirmedPageComponent
  },
  {
    path: 'compte',
    loadChildren: () => import('../account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'admin',
    component: AdminHomepageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

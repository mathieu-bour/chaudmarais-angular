import {ProductsListPageComponent} from './pages/products-list-page/products-list-page.component';
import {ReturnPolicyPageComponent} from './pages/return-policy-page/return-policy-page.component';
import {ProductViewPageComponent} from './pages/product-view-page/product-view-page.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {Routes} from '@angular/router';

export const shopRoutes: Routes = [
  {
    path: '',
    component: ProductsListPageComponent
  },
  {
    path: 'politique-retour',
    component: ReturnPolicyPageComponent
  },
  {
    path: 'produits/:slugId',
    component: ProductViewPageComponent
  },
  {
    path: 'panier',
    component: CartPageComponent
  }
];

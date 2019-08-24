import {Routes} from '@angular/router';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {StocksPageComponent} from './pages/stocks-page/stocks-page.component';
import {OrdersPaidPageComponent} from './pages/orders-paid-page/orders-paid-page.component';

export const adminRoutes: Routes = [
  {
    path: 'commandes/a-livrer',
    component: OrdersPaidPageComponent
  },
  {
    path: 'products/:productId/stocks',
    component: StocksPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];

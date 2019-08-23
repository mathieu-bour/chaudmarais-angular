import {Routes} from '@angular/router';
import {AccountPageComponent} from './pages/account-page/account-page.component';
import {AddressesPageComponent} from './pages/addresses-page/addresses-page.component';
import {OrdersPageComponent} from './pages/orders-page/orders-page.component';

export const accountRoutes: Routes = [
  {
    path: 'informations',
    component: AccountPageComponent
  },
  {
    path: 'adresses',
    component: AddressesPageComponent
  },
  {
    path: 'commandes',
    component: OrdersPageComponent
  }
];

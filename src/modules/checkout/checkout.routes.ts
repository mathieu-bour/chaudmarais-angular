import {CheckoutPageComponent} from './pages/checkout-page/checkout-page.component';
import {OrderConfirmedPageComponent} from './pages/order-confirmed-page/order-confirmed-page.component';
import {Routes} from '@angular/router';

export const checkoutRoutes: Routes = [
  {
    path: 'confirmation',
    component: CheckoutPageComponent
  },
  {
    path: 'commande-confirmee',
    component: OrderConfirmedPageComponent
  },
];

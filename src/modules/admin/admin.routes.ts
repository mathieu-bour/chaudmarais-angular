import {Routes} from '@angular/router';
import {ProductsPageComponent} from './pages/products-page/products-page.component';

export const adminRoutes: Routes = [
  {
    path: 'products',
    component: ProductsPageComponent
  }
];

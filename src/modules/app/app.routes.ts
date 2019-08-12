import {Routes} from '@angular/router';
import {HomePageComponent} from '../shop/pages/home-page/home-page.component';
import {LegalPageComponent} from '../shop/pages/legal-page/legal-page.component';

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
    path: '**',
    redirectTo: ''
  }
];

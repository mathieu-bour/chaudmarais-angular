import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressesPageComponent} from './pages/addresses-page/addresses-page.component';
import {UIModule} from '../ui/ui.module';
import {APIModule} from '../api/api.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AccountPageComponent} from './pages/account-page/account-page.component';
import {AccountLayoutComponent} from './layouts/account-layout/account-layout.component';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {accountRoutes} from './account.module.routes';
import {OrdersPageComponent} from './pages/orders-page/orders-page.component';
import {UtilsModule} from '../utils/utils.module';


@NgModule({
  declarations: [
    AccountLayoutComponent,
    AddressesPageComponent,
    AccountPageComponent,
    OrdersPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(accountRoutes),
    APIModule,
    UIModule,
    UtilsModule,
    FlexModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AccountModule {
}

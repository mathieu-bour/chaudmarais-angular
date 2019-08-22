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
import {MatButtonModule} from '@angular/material';


@NgModule({
  declarations: [
    AddressesPageComponent,
    AccountPageComponent,
    AccountLayoutComponent
  ],
  imports: [
    CommonModule,
    APIModule,
    UIModule,
    ReactiveFormsModule,
    RouterModule,
    FlexModule,
    MatButtonModule
  ]
})
export class AccountModule {
}

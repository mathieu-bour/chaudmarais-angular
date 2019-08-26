import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UIModule} from '../ui/ui.module';
import {RouterModule} from '@angular/router';
import {checkoutRoutes} from './checkout.routes';
import {CheckoutPageComponent} from './pages/checkout-page/checkout-page.component';
import {OrderConfirmedPageComponent} from './pages/order-confirmed-page/order-confirmed-page.component';
import {CartTableComponent} from './components/cart-table/cart-table.component';
import {AddressSelectorComponent} from './components/address-selector/address-selector.component';
import {MatRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UtilsModule} from '../utils/utils.module';
import {APIModule} from '../api/api.module';
import {NgxsModule} from '@ngxs/store';
import {CheckoutState} from './states/checkout/checkout.state';


@NgModule({
  declarations: [
    // Pages
    CheckoutPageComponent,
    OrderConfirmedPageComponent,
    // Components
    AddressSelectorComponent,
    CartTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(checkoutRoutes),
    NgxsModule.forFeature([CheckoutState]),
    // Chaud Marais
    APIModule,
    UIModule,
    UtilsModule
  ]
})
export class CheckoutModule {
}

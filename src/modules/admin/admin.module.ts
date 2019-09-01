import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilsModule} from '../utils/utils.module';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin.routes';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {NgxsModule} from '@ngxs/store';
import {AdminState} from './states/admin/admin.state';
import {ProductsTableComponent} from './components/products-table/products-table.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {APIModule} from '../api/api.module';
import {UIModule} from '../ui/ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import { StockFormComponent } from './components/stock-form/stock-form.component';
import { StocksPageComponent } from './pages/stocks-page/stocks-page.component';
import { OrdersPaidPageComponent } from './pages/orders-paid-page/orders-paid-page.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    ProductsPageComponent,
    ProductsTableComponent,
    ProductFormComponent,
    StockFormComponent,
    StocksPageComponent,
    OrdersPaidPageComponent,
    OrdersTableComponent,
    OrdersPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    ReactiveFormsModule,
    NgxsModule.forFeature([
      AdminState
    ]),
    // Chaud
    APIModule,
    UtilsModule,
    UIModule,
  ]
})
export class AdminModule {
}

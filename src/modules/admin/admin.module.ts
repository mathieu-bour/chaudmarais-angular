import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatButtonToggleModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule, MatSlideToggleModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {UtilsModule} from '../utils/utils.module';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin.routes';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {NgxsModule} from '@ngxs/store';
import {AdminState} from './states/admin/admin.state';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import {APIModule} from '../api/api.module';
import {UIModule} from '../ui/ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import { StockFormComponent } from './components/stock-form/stock-form.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    ProductsPageComponent,
    ProductsTableComponent,
    ProductFormComponent,
    StockFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    NgxsModule.forFeature([
      AdminState
    ]),
    // Material
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    // Chaud
    APIModule,
    UtilsModule,
    MatPaginatorModule,
    UIModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ]
})
export class AdminModule {
}

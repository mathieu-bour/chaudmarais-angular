import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatSidenavModule} from '@angular/material';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import {UtilsModule} from '../utils/utils.module';



@NgModule({
  declarations: [AdminHomepageComponent, ProductEditComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    UtilsModule
  ]
})
export class AdminModule { }

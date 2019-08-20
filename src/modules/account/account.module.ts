import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesPageComponent } from './pages/addresses-page/addresses-page.component';
import {UIModule} from '../ui/ui.module';
import {APIModule} from '../api/api.module';


@NgModule({
  declarations: [AddressesPageComponent],
  imports: [
    CommonModule,
    APIModule,
    UIModule
  ]
})
export class AccountModule { }

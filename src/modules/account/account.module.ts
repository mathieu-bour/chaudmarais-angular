import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesPageComponent } from './pages/addresses-page/addresses-page.component';
import {UIModule} from '../ui/ui.module';
import {APIModule} from '../api/api.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AccountPageComponent } from './pages/account-page/account-page.component';


@NgModule({
  declarations: [AddressesPageComponent, AccountPageComponent],
  imports: [
    CommonModule,
    APIModule,
    UIModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BtnSelectComponent} from './components/btn-select/btn-select.component';


@NgModule({
  declarations: [BtnSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [BtnSelectComponent]
})
export class UiModule {
}

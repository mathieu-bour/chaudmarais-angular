import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginDialogComponent} from './components/login-dialog/login-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [LoginDialogComponent],
  exports: [LoginDialogComponent]
})
export class UserModule {
}

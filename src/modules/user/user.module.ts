import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginDialogComponent} from './components/login-dialog/login-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterDialogComponent} from './components/register-dialog/register-dialog.component';
import {UIModule} from '../ui/ui.module';

@NgModule({
  declarations: [LoginDialogComponent, RegisterDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIModule
  ],
  entryComponents: [LoginDialogComponent, RegisterDialogComponent],
  exports: [LoginDialogComponent]
})
export class UserModule {
}

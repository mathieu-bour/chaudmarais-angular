import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReplacePipe} from './pipes/replace/replace.pipe';
import {SafePipe, SafePipeModule} from 'safe-pipe';


@NgModule({
  declarations: [
    ReplacePipe
  ],
  imports: [
    CommonModule,
    SafePipeModule
  ],
  exports: [
    ReplacePipe,
    SafePipe
  ]
})
export class UtilsModule {
}

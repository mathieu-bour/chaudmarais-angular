import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReplacePipe} from './pipes/replace/replace.pipe';
import {SafePipe, SafePipeModule} from 'safe-pipe';
import { EurosPipe } from './pipes/euros/euros.pipe';
import { CentsPipe } from './pipes/cents/cents.pipe';
import { ThumbPipe } from './pipes/thumb/thumb.pipe';
import { PricePipe } from './pipes/price/price.pipe';
import { OrderIdPipe } from './pipes/orderId/order-id.pipe';


@NgModule({
  declarations: [
    ReplacePipe,
    EurosPipe,
    CentsPipe,
    ThumbPipe,
    PricePipe,
    OrderIdPipe
  ],
  imports: [
    CommonModule,
    SafePipeModule
  ],
  exports: [
    ReplacePipe,
    SafePipe,
    CentsPipe,
    EurosPipe,
    ThumbPipe,
    PricePipe,
    OrderIdPipe
  ]
})
export class UtilsModule {
}

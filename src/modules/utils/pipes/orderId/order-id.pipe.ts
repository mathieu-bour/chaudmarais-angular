import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderId'
})
export class OrderIdPipe implements PipeTransform {
  transform(paymentIntentId: string): any {
    return paymentIntentId.substr(3, 5).toUpperCase();
  }

}

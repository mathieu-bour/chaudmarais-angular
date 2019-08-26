import {Pipe, PipeTransform} from '@angular/core';
import {OrderStatus} from '../../../api/models/order';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(status: OrderStatus): string {
    switch (status) {
      case 'paid':
        return 'payée';
      case 'fulfilled':
        return 'envoyée';
    }
  }

}

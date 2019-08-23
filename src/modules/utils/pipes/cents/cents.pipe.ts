import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cents'
})
export class CentsPipe implements PipeTransform {
  transform(value: number): string {
    const cents = value % 100;

    if (cents < 10) {
      return '0' + cents.toString();
    } else {
      return cents.toString();
    }
  }
}

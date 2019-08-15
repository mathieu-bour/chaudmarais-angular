import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'euros'
})
export class EurosPipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value / 100);
  }
}

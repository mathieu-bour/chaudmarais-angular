import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'euros'
})
export class EurosPipe implements PipeTransform {
  transform(value: number): string {
    return Math.floor(value / 100).toString();
  }
}

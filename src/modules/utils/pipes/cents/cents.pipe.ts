import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cents'
})
export class CentsPipe implements PipeTransform {
  transform(value: number): number {
    return value % 100;
  }
}

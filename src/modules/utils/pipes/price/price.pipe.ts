import {Pipe, PipeTransform} from '@angular/core';
import {EurosPipe} from '../euros/euros.pipe';
import {CentsPipe} from '../cents/cents.pipe';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  private eurosPipe: EurosPipe;
  private centsPipe: CentsPipe;

  constructor() {
    this.eurosPipe = new EurosPipe();
    this.centsPipe = new CentsPipe();
  }

  transform(priceInCents: number, currency: string = '€'): string {
    return this.eurosPipe.transform(priceInCents) + '.' + this.centsPipe.transform(priceInCents) + currency;
  }

}

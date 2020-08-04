import { Pipe, PipeTransform } from '@angular/core';

import { QService } from '../services/q.service';


@Pipe({
  name: 'taxAndFees',
  pure: false
})
export class TaxAndFeesPipe implements PipeTransform {

  constructor(
    private q: QService
  ) {}

  transform(value: string, option: string): string {

    const symbol = this.q.access.currencySymbol;
    const current = (<any>this.q.access.currency).find(e => e.id === value);

    if (!value || !current) return;

    if (option === 'hasTaxOrFees') {

      return current.hasOwnProperty('taxes_and_fees');

    } else if (option === 'tax') {
      
      return `${symbol}${current?.taxes_and_fees?.tax}`;
      
    } else if (option === 'hotelFees') {
      
      return `${symbol}${current?.taxes_and_fees?.hotel_fees}`;
      
    }

  }

}

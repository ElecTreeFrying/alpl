import { Pipe, PipeTransform } from '@angular/core';

import { QService } from '../services/q.service';


@Pipe({
  name: 'price',
  pure: false
})
export class PricePipe implements PipeTransform {

  constructor(
    private q: QService
  ) {}

  transform(value: any): any {
  
    if (!value) return;

    const current = (<any>this.q.access.currency).find(e => e.id === value);

    const symbol = this.q.access.currencySymbol;

    let amount = 0;

    if (
      this.q.access.currencyShort === 'krw' ||
      this.q.access.currencyShort === 'jpy' ||
      this.q.access.currencyShort === 'idr'
    ) {
      amount = Math.ceil(
        Math.floor(current?.price)/100
      )*100;
    } else {
      amount = Math.floor(current?.price)
    }

    const price = Number(amount).toLocaleString();

    return `${price}` !== 'NaN' ? `${symbol}${price}` : 'Rates unavailable.';
  }

}

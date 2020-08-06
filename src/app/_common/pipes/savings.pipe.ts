import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'lodash';

import { QService } from '../services/q.service';


@Pipe({
  name: 'savings',
  pure: false
})
export class SavingsPipe implements PipeTransform {

  constructor(
    private q: QService
  ) {}

  transform(value: any, option?: any): any {

    if (!value) return;

    const symbol = this.q.access.currencySymbol;
    const current = (<any>this.q.access.currency).find(e => e.id === value);

    if (option === 'clean') {
      return value === 'No savings.' ? undefined : value;
    } else if (option === 'hasCompetitors') {

      if (!current) return;

      return current.hasOwnProperty('competitors');
    }
  
    if (current.hasOwnProperty('competitors')) {
      
      if (option === 'competitors') {
        
        const prices = sortBy(
          Object.entries(current.competitors)
            .map((e: any) => ({ name: e[0], price: this.toPrice(e[1]), key: e[1] }))
            .concat({ name: 'ASCENDA LOYALTY', price: this.toPrice(current.price), key: current.price }),
            [ 'key' ]
          )
          .map((e) => {
            return `\n${e.name}: ${symbol}${e.price}`
          });

        const first = prices[0] + ' (cheapest)';
        const last = prices[prices.length - 1] + ' (most expensive)';

        prices.shift();
        prices.pop();

        prices.unshift(first);
        prices.push(last)

        return prices.join('');
      }

      const competitorPrices = Object.entries(current.competitors).map(e => ({ price: e[1], }));

      const largestCompetitorPrice = Math.max.apply(null, competitorPrices.map(e => e.price));

      const saved = largestCompetitorPrice - current.price;

      if (saved < 1) {
        return 'No savings.';
      }

      if (option === 'largest') {
        
        return `${symbol}${this.toPrice(largestCompetitorPrice)}`;

      } else if (option === 'saved') {
        
        const percentSaved = Math.floor((saved/largestCompetitorPrice)*100);
        const displayPSaved = percentSaved > 0 ? `(${percentSaved}%)` : '';

        return `Save ${symbol}${this.toPrice(saved)} ${displayPSaved}`;

      }

    } else {

      return 'No savings.';
    }

  }

  private toPrice(price: number) {

    let amount = 0;
    const symbol = this.q.access.currencySymbol;

    if (
      this.q.access.currencyShort === 'krw' ||
      this.q.access.currencyShort === 'jpy' ||
      this.q.access.currencyShort === 'idr'
    ) {
      amount = Math.ceil(
        Math.floor(price)/100
      )*100;
    } else {
      amount = Math.floor(price)
    }

    return `${Number(amount).toLocaleString()}`
  }

}

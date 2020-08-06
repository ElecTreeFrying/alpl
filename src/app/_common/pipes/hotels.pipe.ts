import { Pipe, PipeTransform } from '@angular/core';
import { intersectionBy } from 'lodash';

import { QService } from '../services/q.service';


@Pipe({
  name: 'hotels'
})
export class HotelsPipe implements PipeTransform {

  constructor(
    private q: QService
  ) {}

  transform(value: any, option?: string): any {

    if (!value || !this.q.access.currency) return;

    const max = Math.max.apply(null, this.q.access.currency.map(e => e.id));
      
    let updated: any = (new Array(max)).fill(0).map((e, i) => ({ id: i + 1 }));

    updated = updated.map((e: any, i: number) => {

      const index = i + 1;
      const data = (<any>this.q.access.currency).find(e => e.id === index);

      return data ? data : { id: index };

    });

    const leftUpdated = updated.filter((e: any) => e.price);
    const rightUpdated = updated.filter((e: any) => !e.price);

    const transformed = intersectionBy(value, leftUpdated, 'id').concat(
      intersectionBy(value, rightUpdated, 'id')
    );

    if (option === 'forTesting') {
      return JSON.stringify(transformed);
    }

    return transformed;
  }

}

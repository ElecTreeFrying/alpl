import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, exhaustMap } from 'rxjs/operators'

import { QService } from './q.service';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private q: QService
  ) {

    const _default = this.q.$['currency'].pipe(

      exhaustMap((currency: any) => {
        return this.http.get(environment.url2.prices[currency].url).pipe(
          map((res) => {
            return {
              data: res,
              about: environment.url2.prices[currency]
            }
          })
        );
      })

    ).subscribe((res: any) => {

      this.q.store = { key: 'currency', value: res.data };
      this.q.store = { key: 'currencySymbol', value: res.about.currency.symbol };
      this.q.store = { key: 'currencyShort', value: res.about.currency.short };
      console.log('changed', this.q.access.currencySymbol);

    });

  }

  get hotels() {
    return this.http.get(environment.url2.data);
  }
  
}

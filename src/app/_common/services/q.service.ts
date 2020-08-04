import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface Setter {
  key: any;
  value: any;
};

interface Variable {
  currency?: any;
  currencySymbol?: string;
  currencyShort?: string;
};

@Injectable({
  providedIn: 'root'
})
export class QService {

  private _data: any = {};

  private _source = {
  };

  $ = {
  };

  constructor() { 

    const session = sessionStorage.getItem('currency');

    this._source['currency'] = new BehaviorSubject(!session ? 'usd' : session);
    this.$['currency'] = this._source['currency'].asObservable();
  }

  get access(): Variable {
    return this._data;
  }
  
  set store(res: Setter) {
    this._data[res.key] = res.value;
  }

  updateSource(key: string, data: any) {
    this._source[key].next(data);
  }

}
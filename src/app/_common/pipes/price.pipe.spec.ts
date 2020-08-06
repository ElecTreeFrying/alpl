import { PricePipe } from './price.pipe';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QService } from '../services/q.service';

import { cny, krw, sgd, usd, hotels } from '../testing-mocks/data';
import { environment } from '../../../environments/environment';


@Component({
  template: `<div>{{ id | price }}</div>`
})
export class HotelsPipeHostComponent {
  id: number;
}

describe('PricePipe', () => {
  
  describe('selected currency: CNY', () => {

      const currencies = { cny, krw, sgd, usd };
    const selectedCurrency = 'cny';
  
    let serviceStub: any;
  
    beforeEach(async () => {
      
      serviceStub = {
        access: {
          currency: currencies[selectedCurrency],
          currencySymbol: environment.url.prices[selectedCurrency].currency.symbol
        }
      };
  
      TestBed
        .configureTestingModule({
          declarations: [ HotelsPipeHostComponent, PricePipe ],
          providers: [ { provide: QService, useValue: serviceStub } ]
        })
        .compileComponents();
    });
  
    let fixture: ComponentFixture<HotelsPipeHostComponent>;
    let debugElement: DebugElement;
  
    let component: HotelsPipeHostComponent;
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HotelsPipeHostComponent);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
  
      fixture.detectChanges();
    });
  
    it('should create instance', () => {
      expect(fixture).toBeTruthy();
    });
  
    it('should round cny to nearest 1 and displayed as amount locale string.', () => {
      component.id = 1;
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('¥825');
    });
  
    it('should return rates unavailable of there are no rates listed.', () => {
      component.id = 99;
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('Rates unavailable.');
    });
  
  });
  
  describe('selected currency: KRW', () => {
  
    const staticData = hotels;
    const currencies = { cny, krw, sgd, usd };
    const selectedCurrency = 'krw';
  
    let serviceStub: any;
  
    beforeEach(async () => {
      
      serviceStub = {
        access: {
          currency: currencies[selectedCurrency],
          currencyShort: selectedCurrency,
          currencySymbol: environment.url.prices[selectedCurrency].currency.symbol
        }
      };
  
      TestBed
        .configureTestingModule({
          declarations: [ HotelsPipeHostComponent, PricePipe ],
          providers: [ { provide: QService, useValue: serviceStub } ]
        })
        .compileComponents();
    });
  
    let fixture: ComponentFixture<HotelsPipeHostComponent>;
    let debugElement: DebugElement;
  
    let component: HotelsPipeHostComponent;
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HotelsPipeHostComponent);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
  
      fixture.detectChanges();
    });
  
    it('should create instance', () => {
      expect(fixture).toBeTruthy();
    });
  
    it('should round korean won to nearest 100 and displayed as amount locale string.', () => {
      component.id = 2;
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('₩942,200');
    });
  
    it('should return rates unavailable of there are no rates listed.', () => {
      component.id = 99;
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('Rates unavailable.');
    });
  
  });
  
  describe('selected currency: SGD', () => {
  
    const staticData = hotels;
    const currencies = { cny, krw, sgd, usd };
    const selectedCurrency = 'sgd';
  
    let serviceStub: any;
  
    beforeEach(async () => {
      
      serviceStub = {
        access: {
          currency: currencies[selectedCurrency],
          currencySymbol: environment.url.prices[selectedCurrency].currency.symbol
        }
      };
  
      TestBed
        .configureTestingModule({
          declarations: [ HotelsPipeHostComponent, PricePipe ],
          providers: [ { provide: QService, useValue: serviceStub } ]
        })
        .compileComponents();
    });
  
    let fixture: ComponentFixture<HotelsPipeHostComponent>;
    let debugElement: DebugElement;
  
    let component: HotelsPipeHostComponent;
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HotelsPipeHostComponent);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
  
      fixture.detectChanges();
    });
  
    it('should create instance', () => {
      expect(fixture).toBeTruthy();
    });
  
    it('should round sgd to nearest 1 and displayed as amount locale string.', () => {
      component.id = 1;
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('$164');
    });
  
    it('should return rates unavailable of there are no rates listed.', () => {
      component.id = 99;
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('Rates unavailable.');
    });
  
  });
  
  describe('selected currency: USD', () => {
  
    const staticData = hotels;
    const currencies = { cny, krw, sgd, usd };
    const selectedCurrency = 'usd';
  
    let serviceStub: any;
  
    beforeEach(async () => {
      
      serviceStub = {
        access: {
          currency: currencies[selectedCurrency],
          currencySymbol: environment.url.prices[selectedCurrency].currency.symbol
        }
      };
  
      TestBed
        .configureTestingModule({
          declarations: [ HotelsPipeHostComponent, PricePipe ],
          providers: [ { provide: QService, useValue: serviceStub } ]
        })
        .compileComponents();
    });
  
    let fixture: ComponentFixture<HotelsPipeHostComponent>;
    let debugElement: DebugElement;
  
    let component: HotelsPipeHostComponent;
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HotelsPipeHostComponent);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
  
      fixture.detectChanges();
    });
  
    it('should create instance', () => {
      expect(fixture).toBeTruthy();
    });
  
    it('should round usd to nearest 1 and displayed as amount locale string.', () => {
      component.id = 1;
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('$120');
    });
  
    it('should return rates unavailable of there are no rates listed.', () => {
      component.id = 99;
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('Rates unavailable.');
    });
  
  });

});

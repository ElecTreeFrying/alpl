import { TaxAndFeesPipe } from './tax-and-fees.pipe';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QService } from '../services/q.service';

import { cny, krw, sgd, usd, hotels } from '../testing-mocks/data';
import { environment } from '../../../environments/environment';


@Component({
  template: `<div>{{ id | taxAndFees: option }}</div>`
})
export class TaxAndFeesPipeHostComponent {
  id: number;
  option: string;
}

describe('TaxAndFeesPipe', () => {

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
        declarations: [ TaxAndFeesPipe, TaxAndFeesPipeHostComponent ],
        providers: [ { provide: QService, useValue: serviceStub } ]
      })
      .compileComponents();
  });

  let fixture: ComponentFixture<TaxAndFeesPipeHostComponent>;
  let debugElement: DebugElement;

  let component: TaxAndFeesPipeHostComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxAndFeesPipeHostComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;

    fixture.detectChanges();    
  });

  it('should create instance', () => {
    expect(fixture).toBeTruthy();
  });

  describe('taxAndFees if option is \'hasTaxOrFees\'', () => {
    
    it('should return true if id of selected currency has taxes_and_fees.', () => {
      component.option = 'hasTaxOrFees';
      component.id = 2;
      fixture.detectChanges();

      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;

      expect(div.textContent.trim()).toEqual('true');
    });

    it('should return false if id of selected currency has no taxes_and_fees.', () => {
      component.option = 'hasTaxOrFees';
      component.id = 3;
      fixture.detectChanges();

      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;

      expect(div.textContent.trim()).toEqual('false');
    });
    
  });

  describe('taxAndFees if option is \'tax\'', () => {
    
    it('should return tax of hotel in selected currency', () => {
      component.option = 'tax';
      component.id = 2;
      fixture.detectChanges();

      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;

      expect(div.textContent.trim()).toEqual('$92');
    });

  });

  describe('taxAndFees if option is \'hotelFees\'', () => {
    
    it('should return hotel fees of hotel in selected currency', () => {
      component.option = 'hotelFees';
      component.id = 2;
      fixture.detectChanges();

      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;

      expect(div.textContent.trim()).toEqual('$115');
    });

  });

});

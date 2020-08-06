import { SavingsPipe } from './savings.pipe';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QService } from '../services/q.service';

import { cny, krw, sgd, usd } from '../testing-mocks/data';
import { environment } from '../../../environments/environment';


@Component({
  template: `<div>{{ id | savings: option }}</div>`
})
export class SavingsPipeHostComponent {
  id: number;
  option: string;
}

@Component({
  template: `<div>{{ id | savings: option | savings: option2 }}</div>`
})
export class SavingsPipeHostComponent2 {
  id: any;
  option: string;
  option2: string;
}

describe('SavingsPipe', () => {

  const currencies = { cny, krw, sgd, usd };
  const selectedCurrency = 'usd';

  let serviceStub: any;

  beforeEach(async () => {
    
    serviceStub = {
      access: {
        currency: currencies[selectedCurrency],
        currencySymbol: environment.url.prices[selectedCurrency].currency.symbol,
        currencyShort: selectedCurrency
      }
    };

    TestBed
      .configureTestingModule({
        declarations: [ SavingsPipeHostComponent, SavingsPipeHostComponent2, SavingsPipe ],
        providers: [ { provide: QService, useValue: serviceStub } ]
      })
      .compileComponents();
  });

  let fixture: ComponentFixture<SavingsPipeHostComponent>;
  let debugElement: DebugElement;

  let component: SavingsPipeHostComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsPipeHostComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create instance', () => {
    expect(fixture).toBeTruthy();
  });

  describe('SavingsPipe option: \'clean\'', () => {
    
    let fixture: ComponentFixture<SavingsPipeHostComponent2>;
    let debugElement: DebugElement;
  
    let component: SavingsPipeHostComponent2;
  
    beforeEach(() => {
      fixture = TestBed.createComponent(SavingsPipeHostComponent2);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
  
      fixture.detectChanges();
    });

    it('should return the value itself if value is not \'No savings.\'', () => {
      component.id = 1;
      component.option = 'largest';
      component.option2 = 'clean';
  
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('$140');
    });

  });

  describe('SavingsPipe option: \'hasCompetitors\'', () => {
      
    it('should return true if hotel.id has competitor prices', () => {
      component.id = 1;
      component.option = 'hasCompetitors';
  
      fixture.detectChanges();
  
      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;
  
      expect(div.textContent.trim()).toEqual('true');
    });

  });

  describe('If hotel in selected currency has competitors prices', () => {
  
    describe('SavingsPipe option: \'competitors\'', () => {
  
      it('should return site price and competitors price from cheapest to most expensive', () => {
        component.id = 1;
        component.option = 'competitors';

        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
          .query(By.css('div'))
          .nativeElement;

        expect(div.textContent.trim()).toContain('(cheapest)');
        expect(div.textContent.trim()).toContain('(most expensive)');
      });
  
    });
  
    describe('If saved relative from largest competitor price is less than 1', () => {
    
      it('should return \'No savings.\' text', () => {
        component.id = 2;
        component.option = ''

        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
          .query(By.css('div'))
          .nativeElement;

        expect(div.textContent.trim()).toEqual('No savings.');
      });
    
    });

    describe('If saved relative from largest competitor price is greater than 1', () => {
      
      describe('SavingsPipe option: \'largest\'', () => {
      
        it('should return largest competitor price with currency symbol', () => {
          component.id = 1;
          component.option = 'largest';

          fixture.detectChanges();

          const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;
  
          expect(div.textContent.trim()).toEqual('$140');
        });
  
      });
    
      describe('SavingsPipe option: \'saved\'', () => {
        
        it('should return price saved relative to the largest competitor price with currency symbol', () => {
          component.id = 1;
          component.option = 'saved';

          fixture.detectChanges();

          const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;
  
          expect(div.textContent.trim()).toEqual('Save $20 (14%)');
        });
  
      });
  
    });  
  
  });
  
  describe('If hotel in selected currency has no competitors prices', () => {
    
    it('should return \'No savings.\' text', () => {
      component.id = 2;
      component.option = '';

      fixture.detectChanges();

      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;

      expect(div.textContent.trim()).toContain('No savings.');
    });
    
  });

});



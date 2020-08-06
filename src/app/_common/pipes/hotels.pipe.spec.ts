import { HotelsPipe } from './hotels.pipe';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QService } from '../services/q.service';

import { cny, krw, sgd, usd, hotels } from '../testing-mocks/data';
import { environment } from '../../../environments/environment';


@Component({
  template: `<div>{{ data | hotels: option }}</div>`
})
export class HotelsPipeHostComponent {
  data: any[];
  option: string;
}

describe('HotelsPipe', () => {

  const staticData = hotels;
  const currencies = { cny, krw, sgd, usd };
  const selectedCurrency = 'sgd';

  let serviceStub: any;

  beforeEach(async () => {
    
    serviceStub = {
      access: {
        currency: currencies[selectedCurrency]
      }
    };

    TestBed
      .configureTestingModule({
        declarations: [ HotelsPipeHostComponent, HotelsPipe ],
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

  describe('hotels without rates are push in the last', () => {
    
    it('should return array of data with data without rates are positioned in the last', () => {
      component.data = serviceStub.access.currency;
      component.option = 'forTesting'
      fixture.detectChanges();

      const div: HTMLDivElement = debugElement
        .query(By.css('div'))
        .nativeElement;

      expect(div.textContent.trim()).toBeTruthy();
    });

  });

});

import { LabelPipe } from './label.pipe';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


@Component({
  template: `<div>{{ price | label }}</div>`
})
export class LabelPipeHostComponent {
  price: string;
}

describe('LabelPipe inside a component', () => {

  beforeEach(async () => {
    TestBed
      .configureTestingModule({
        declarations: [ LabelPipe, LabelPipeHostComponent ]
      })
      .compileComponents();
  });

  let fixture: ComponentFixture<LabelPipeHostComponent>;
  let debugElement: DebugElement;

  let component: LabelPipeHostComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPipeHostComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should return true if price is not \'Rates unavailable.\'', () => {
    component.price = '$120';
    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('div'))
      .nativeElement;
    
    expect(div.textContent.trim()).toEqual('true');
  });

  it('should return false if price is \'Rates unavailable.\'', () => {
    component.price = 'Rates unavailable.';
    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('div'))
      .nativeElement;
    
    expect(div.textContent.trim()).toEqual('false');
  });

});

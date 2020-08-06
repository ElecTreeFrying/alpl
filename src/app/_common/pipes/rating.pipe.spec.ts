import { RatingPipe } from './rating.pipe';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


@Component({
  template: '<div>{{ id | rating: 7.7 }}</div>'
})
export class RatingPipeHostComponent {
  id: number;
}

describe('RatingPipe inside a component.', () => {

  beforeEach(async () => {
    TestBed
      .configureTestingModule({
        declarations: [ RatingPipe, RatingPipeHostComponent ]
      })
      .compileComponents();
  });

  let fixture: ComponentFixture<RatingPipeHostComponent>;
  let debugElement: DebugElement;

  let component: RatingPipeHostComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPipeHostComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should multiply rating by 10', () => {
    component.id = 1;
    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('div'))
      .nativeElement;

    expect(div.textContent.trim()).toEqual('77');
  });


});

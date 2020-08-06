import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideOptionsComponent } from './app-side-options.component';

describe('AppSideOptionsComponent', () => {
  let component: AppSideOptionsComponent;
  let fixture: ComponentFixture<AppSideOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSideOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSideOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

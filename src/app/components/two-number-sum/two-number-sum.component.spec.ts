import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoNumberSumComponent } from './two-number-sum.component';

describe('TwoNumberSumComponent', () => {
  let component: TwoNumberSumComponent;
  let fixture: ComponentFixture<TwoNumberSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoNumberSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoNumberSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

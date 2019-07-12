import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayLargestSumComponent } from './array-largest-sum.component';

describe('ArrayLargestSumComponent', () => {
  let component: ArrayLargestSumComponent;
  let fixture: ComponentFixture<ArrayLargestSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayLargestSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayLargestSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

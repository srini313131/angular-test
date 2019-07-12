import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyAnArrayComponent } from './empty-an-array.component';

describe('EmptyAnArrayComponent', () => {
  let component: EmptyAnArrayComponent;
  let fixture: ComponentFixture<EmptyAnArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyAnArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyAnArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

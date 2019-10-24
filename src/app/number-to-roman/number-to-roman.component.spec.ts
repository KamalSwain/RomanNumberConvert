import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToRomanComponent } from './number-to-roman.component';

describe('NumberToRomanComponent', () => {
  let component: NumberToRomanComponent;
  let fixture: ComponentFixture<NumberToRomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberToRomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

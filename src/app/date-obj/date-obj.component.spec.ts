import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateObjComponent } from './date-obj.component';

describe('DateObjComponent', () => {
  let component: DateObjComponent;
  let fixture: ComponentFixture<DateObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

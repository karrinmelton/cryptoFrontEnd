import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCryptosComponent } from './users-cryptos.component';

describe('UsersCryptosComponent', () => {
  let component: UsersCryptosComponent;
  let fixture: ComponentFixture<UsersCryptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCryptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

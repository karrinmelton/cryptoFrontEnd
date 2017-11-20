import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCryptosComponent } from './user-cryptos.component';

describe('UserCryptosComponent', () => {
  let component: UserCryptosComponent;
  let fixture: ComponentFixture<UserCryptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCryptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

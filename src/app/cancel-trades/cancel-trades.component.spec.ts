import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTradesComponent } from './cancel-trades.component';

describe('CancelTradesComponent', () => {
  let component: CancelTradesComponent;
  let fixture: ComponentFixture<CancelTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

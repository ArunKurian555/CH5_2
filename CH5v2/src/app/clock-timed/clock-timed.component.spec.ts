import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTimedComponent } from './clock-timed.component';

describe('ClockTimedComponent', () => {
  let component: ClockTimedComponent;
  let fixture: ComponentFixture<ClockTimedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockTimedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockTimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

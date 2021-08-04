import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumLockComponent } from './num-lock.component';

describe('NumLockComponent', () => {
  let component: NumLockComponent;
  let fixture: ComponentFixture<NumLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumLockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

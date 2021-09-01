import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCountersComponent } from './super-counters.component';

describe('SuperCountersComponent', () => {
  let component: SuperCountersComponent;
  let fixture: ComponentFixture<SuperCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

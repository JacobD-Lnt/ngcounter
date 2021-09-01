import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDuperCountersComponent } from './super-duper-counters.component';

describe('SuperDuperCountersComponent', () => {
  let component: SuperDuperCountersComponent;
  let fixture: ComponentFixture<SuperDuperCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperDuperCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDuperCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

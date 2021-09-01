import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColossalCountersComponent } from './colossal-counters.component';

describe('ColossalCountersComponent', () => {
  let component: ColossalCountersComponent;
  let fixture: ComponentFixture<ColossalCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColossalCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColossalCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

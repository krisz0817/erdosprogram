import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppliedEventsComponent } from './admin-applied-events.component';

describe('AdminAppliedEventsComponent', () => {
  let component: AdminAppliedEventsComponent;
  let fixture: ComponentFixture<AdminAppliedEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppliedEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppliedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaderComponent } from './admin-leader.component';

describe('AdminLeaderComponent', () => {
  let component: AdminLeaderComponent;
  let fixture: ComponentFixture<AdminLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateLeaderComponent } from './admin-create-leader.component';

describe('AdminCreateLeaderComponent', () => {
  let component: AdminCreateLeaderComponent;
  let fixture: ComponentFixture<AdminCreateLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

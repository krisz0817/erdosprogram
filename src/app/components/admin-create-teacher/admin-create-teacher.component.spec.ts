import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateTeacherComponent } from './admin-create-teacher.component';

describe('AdminCreateTeacherComponent', () => {
  let component: AdminCreateTeacherComponent;
  let fixture: ComponentFixture<AdminCreateTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

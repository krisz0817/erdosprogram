import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyTeacherComponent } from './admin-modify-teacher.component';

describe('AdminModifyTeacherComponent', () => {
  let component: AdminModifyTeacherComponent;
  let fixture: ComponentFixture<AdminModifyTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifyTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifyTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

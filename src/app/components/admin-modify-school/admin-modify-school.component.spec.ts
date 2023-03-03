import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifySchoolComponent } from './admin-modify-school.component';

describe('AdminModifySchoolComponent', () => {
  let component: AdminModifySchoolComponent;
  let fixture: ComponentFixture<AdminModifySchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifySchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

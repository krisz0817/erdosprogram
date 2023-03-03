import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateSchoolComponent } from './admin-create-school.component';

describe('AdminCreateSchoolComponent', () => {
  let component: AdminCreateSchoolComponent;
  let fixture: ComponentFixture<AdminCreateSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

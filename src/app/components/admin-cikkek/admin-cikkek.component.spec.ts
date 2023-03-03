import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCikkekComponent } from './admin-cikkek.component';

describe('AdminCikkekComponent', () => {
  let component: AdminCikkekComponent;
  let fixture: ComponentFixture<AdminCikkekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCikkekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCikkekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

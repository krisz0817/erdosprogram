import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGlobalvarsComponent } from './admin-globalvars.component';

describe('AdminGlobalvarsComponent', () => {
  let component: AdminGlobalvarsComponent;
  let fixture: ComponentFixture<AdminGlobalvarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGlobalvarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGlobalvarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

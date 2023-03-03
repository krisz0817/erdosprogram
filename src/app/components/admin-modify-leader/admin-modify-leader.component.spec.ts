import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyLeaderComponent } from './admin-modify-leader.component';

describe('AdminModifyLeaderComponent', () => {
  let component: AdminModifyLeaderComponent;
  let fixture: ComponentFixture<AdminModifyLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifyLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifyLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

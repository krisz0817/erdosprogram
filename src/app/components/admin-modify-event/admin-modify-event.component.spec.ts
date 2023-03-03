import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyEventComponent } from './admin-modify-event.component';

describe('AdminModifyEventComponent', () => {
  let component: AdminModifyEventComponent;
  let fixture: ComponentFixture<AdminModifyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifyEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTanarokComponent } from './admin-tanarok.component';

describe('AdminTanarokComponent', () => {
  let component: AdminTanarokComponent;
  let fixture: ComponentFixture<AdminTanarokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTanarokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTanarokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

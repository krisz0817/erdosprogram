import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyGalleryComponent } from './admin-modify-gallery.component';

describe('AdminModifyGalleryComponent', () => {
  let component: AdminModifyGalleryComponent;
  let fixture: ComponentFixture<AdminModifyGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifyGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

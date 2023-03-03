import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateGalleryComponent } from './admin-create-gallery.component';

describe('AdminCreateGalleryComponent', () => {
  let component: AdminCreateGalleryComponent;
  let fixture: ComponentFixture<AdminCreateGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

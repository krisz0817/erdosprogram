import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedGalleryComponent } from './selected-gallery.component';

describe('SelectedGalleryComponent', () => {
  let component: SelectedGalleryComponent;
  let fixture: ComponentFixture<SelectedGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

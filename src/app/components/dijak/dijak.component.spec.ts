import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DijakComponent } from './dijak.component';

describe('DijakComponent', () => {
  let component: DijakComponent;
  let fixture: ComponentFixture<DijakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DijakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DijakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

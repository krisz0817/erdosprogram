import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanarokComponent } from './tanarok.component';

describe('TanarokComponent', () => {
  let component: TanarokComponent;
  let fixture: ComponentFixture<TanarokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanarokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanarokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

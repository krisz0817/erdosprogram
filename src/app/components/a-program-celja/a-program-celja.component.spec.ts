import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProgramCeljaComponent } from './a-program-celja.component';

describe('AProgramCeljaComponent', () => {
  let component: AProgramCeljaComponent;
  let fixture: ComponentFixture<AProgramCeljaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AProgramCeljaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AProgramCeljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelentkezesFoglalkozasraComponent } from './jelentkezes-foglalkozasra.component';

describe('JelentkezesFoglalkozasraComponent', () => {
  let component: JelentkezesFoglalkozasraComponent;
  let fixture: ComponentFixture<JelentkezesFoglalkozasraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JelentkezesFoglalkozasraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JelentkezesFoglalkozasraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

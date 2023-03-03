import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VezetokComponent } from './vezetok.component';

describe('VezetokComponent', () => {
  let component: VezetokComponent;
  let fixture: ComponentFixture<VezetokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VezetokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VezetokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

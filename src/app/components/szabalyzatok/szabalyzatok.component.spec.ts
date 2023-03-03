import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzabalyzatokComponent } from './szabalyzatok.component';

describe('SzabalyzatokComponent', () => {
  let component: SzabalyzatokComponent;
  let fixture: ComponentFixture<SzabalyzatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzabalyzatokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzabalyzatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

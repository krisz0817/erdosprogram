import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdomanyozasRendjeComponent } from './adomanyozas-rendje.component';

describe('AdomanyozasRendjeComponent', () => {
  let component: AdomanyozasRendjeComponent;
  let fixture: ComponentFixture<AdomanyozasRendjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdomanyozasRendjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdomanyozasRendjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

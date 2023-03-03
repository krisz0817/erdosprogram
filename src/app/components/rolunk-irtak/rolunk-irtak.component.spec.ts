import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolunkIrtakComponent } from './rolunk-irtak.component';

describe('RolunkIrtakComponent', () => {
  let component: RolunkIrtakComponent;
  let fixture: ComponentFixture<RolunkIrtakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolunkIrtakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolunkIrtakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

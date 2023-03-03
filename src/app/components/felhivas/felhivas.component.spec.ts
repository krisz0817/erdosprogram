import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelhivasComponent } from './felhivas.component';

describe('FelhivasComponent', () => {
  let component: FelhivasComponent;
  let fixture: ComponentFixture<FelhivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelhivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FelhivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

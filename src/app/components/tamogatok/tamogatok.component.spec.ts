import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamogatokComponent } from './tamogatok.component';

describe('TamogatokComponent', () => {
  let component: TamogatokComponent;
  let fixture: ComponentFixture<TamogatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamogatokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamogatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

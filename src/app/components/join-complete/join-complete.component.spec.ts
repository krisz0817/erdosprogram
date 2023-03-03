import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCompleteComponent } from './join-complete.component';

describe('JoinCompleteComponent', () => {
  let component: JoinCompleteComponent;
  let fixture: ComponentFixture<JoinCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

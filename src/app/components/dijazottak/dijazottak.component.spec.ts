import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DijazottakComponent } from './dijazottak.component';

describe('DijazottakComponent', () => {
  let component: DijazottakComponent;
  let fixture: ComponentFixture<DijazottakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DijazottakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DijazottakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

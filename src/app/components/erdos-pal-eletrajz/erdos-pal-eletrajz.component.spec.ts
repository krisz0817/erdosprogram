import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErdosPalEletrajzComponent } from './erdos-pal-eletrajz.component';

describe('ErdosPalEletrajzComponent', () => {
  let component: ErdosPalEletrajzComponent;
  let fixture: ComponentFixture<ErdosPalEletrajzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErdosPalEletrajzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErdosPalEletrajzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateArticleComponent } from './admin-create-article.component';

describe('AdminCreateArticleComponent', () => {
  let component: AdminCreateArticleComponent;
  let fixture: ComponentFixture<AdminCreateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

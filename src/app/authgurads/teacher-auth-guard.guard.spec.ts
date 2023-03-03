import { TestBed } from '@angular/core/testing';

import { TeacherAuthGuard } from './teacher-auth-guard.guard';

describe('TeacherAuthGuard', () => {
  let guard: TeacherAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeacherAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

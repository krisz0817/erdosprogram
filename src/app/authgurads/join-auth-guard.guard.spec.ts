import { TestBed } from '@angular/core/testing';

import { JoinAuthGuard } from './join-auth-guard.guard';

describe('JoinAuthGuard', () => {
  let guard: JoinAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JoinAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

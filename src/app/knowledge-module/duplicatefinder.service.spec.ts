import { TestBed } from '@angular/core/testing';

import { DuplicatefinderService } from './duplicatefinder.service';

describe('DuplicatefinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DuplicatefinderService = TestBed.get(DuplicatefinderService);
    expect(service).toBeTruthy();
  });
});

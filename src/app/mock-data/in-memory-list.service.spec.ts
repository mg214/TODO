import { TestBed } from '@angular/core/testing';

import { InMemoryListService } from './in-memory-list.service';

describe('InMemoryListService', () => {
  let service: InMemoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

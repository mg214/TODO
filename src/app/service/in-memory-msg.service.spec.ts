import { TestBed } from '@angular/core/testing';

import { InMemoryMsgService } from '../mock-data/in-memory-msg.service';

describe('InMemoryMsgService', () => {
  let service: InMemoryMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

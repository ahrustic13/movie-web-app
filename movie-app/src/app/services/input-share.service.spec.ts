import { TestBed } from '@angular/core/testing';

import { InputShareService } from './input-share.service';

describe('InputShareService', () => {
  let service: InputShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

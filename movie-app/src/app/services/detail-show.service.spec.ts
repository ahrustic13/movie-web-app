import { TestBed } from '@angular/core/testing';

import { DetailShowService } from './detail-show.service';

describe('DetailShowService', () => {
  let service: DetailShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

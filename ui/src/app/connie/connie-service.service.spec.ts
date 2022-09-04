import { TestBed } from '@angular/core/testing';

import { ConnieServiceService } from './connie-service.service';

describe('ConnieServiceService', () => {
  let service: ConnieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ColumbiaStudentServiceService } from './columbia-student-service.service';

describe('ImdbServiceService', () => {
  let service: ColumbiaStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumbiaStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

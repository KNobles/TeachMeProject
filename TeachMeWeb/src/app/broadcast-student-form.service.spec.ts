import { TestBed } from '@angular/core/testing';

import { BroadcastStudentFormService } from './broadcast-student-form.service';

describe('BroadcastStudentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BroadcastStudentFormService = TestBed.get(BroadcastStudentFormService);
    expect(service).toBeTruthy();
  });
});

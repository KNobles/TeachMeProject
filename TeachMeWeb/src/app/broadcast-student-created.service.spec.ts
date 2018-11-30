import { TestBed } from '@angular/core/testing';

import { BroadcastStudentCreatedService } from './broadcast-student-created.service';

describe('BroadcastStudentCreatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BroadcastStudentCreatedService = TestBed.get(BroadcastStudentCreatedService);
    expect(service).toBeTruthy();
  });
});

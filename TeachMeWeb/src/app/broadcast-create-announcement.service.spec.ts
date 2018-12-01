import { TestBed } from '@angular/core/testing';

import { BroadcastCreateAnnouncementService } from './broadcast-create-announcement.service';

describe('BroadcastCreateAnnouncementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BroadcastCreateAnnouncementService = TestBed.get(BroadcastCreateAnnouncementService);
    expect(service).toBeTruthy();
  });
});

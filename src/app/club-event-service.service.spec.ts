import { TestBed } from '@angular/core/testing';

import { ClubEventServiceService } from './club-event-service.service';

describe('ClubEventServiceService', () => {
  let service: ClubEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

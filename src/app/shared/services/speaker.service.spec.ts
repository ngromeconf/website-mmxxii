import { TestBed } from '@angular/core/testing';

import { SpeakerService } from './speaker.service';

describe('SpeakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeakerService = TestBed.inject(SpeakerService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NgAnimateScrollService } from './ng-animate-scroll.service';

describe('NgAnimateScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgAnimateScrollService = TestBed.inject(NgAnimateScrollService);
    expect(service).toBeTruthy();
  });
});

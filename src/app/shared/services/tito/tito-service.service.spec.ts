import { TestBed } from '@angular/core/testing';

import { TitoService } from './tito-service.service';

describe('TitoServiceService', () => {
  let service: TitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

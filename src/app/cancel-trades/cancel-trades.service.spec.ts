import { TestBed } from '@angular/core/testing';

import { CancelTradesService } from './cancel-trades.service';

describe('CancelTradesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancelTradesService = TestBed.get(CancelTradesService);
    expect(service).toBeTruthy();
  });
});

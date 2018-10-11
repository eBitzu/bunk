import { TestBed } from '@angular/core/testing';

import { FteamService } from './fteam.service';

describe('FteamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FteamService = TestBed.get(FteamService);
    expect(service).toBeTruthy();
  });
});

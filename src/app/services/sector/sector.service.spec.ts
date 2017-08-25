import { TestBed, inject } from '@angular/core/testing';

import { SectorService } from './sector.service';

describe('SectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectorService]
    });
  });

  it('should ...', inject([SectorService], (service: SectorService) => {
    expect(service).toBeTruthy();
  }));
});

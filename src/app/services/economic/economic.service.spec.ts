import { TestBed, inject } from '@angular/core/testing';

import { EconomicService } from './economic.service';

describe('EconomicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EconomicService]
    });
  });

  it('should ...', inject([EconomicService], (service: EconomicService) => {
    expect(service).toBeTruthy();
  }));
});

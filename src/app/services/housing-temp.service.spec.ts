import { TestBed } from '@angular/core/testing';

import { HousingTempService } from './housing-temp.service';

describe('HousingTempService', () => {
  let service: HousingTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

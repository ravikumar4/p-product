import { TestBed } from '@angular/core/testing';

import { PropertybagService } from './propertybag.service';

describe('PropertybagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertybagService = TestBed.get(PropertybagService);
    expect(service).toBeTruthy();
  });
});

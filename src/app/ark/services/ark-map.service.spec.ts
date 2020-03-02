/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArkMapService } from './ark-map.service';

describe('Service: ArkMap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArkMapService]
    });
  });

  it('should ...', inject([ArkMapService], (service: ArkMapService) => {
    expect(service).toBeTruthy();
  }));
});

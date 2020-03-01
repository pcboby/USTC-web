/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoaderIntercepterService } from './loader-intercepter.service';

describe('Service: LoaderIntercepter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderIntercepterService]
    });
  });

  it('should ...', inject([LoaderIntercepterService], (service: LoaderIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});

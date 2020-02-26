/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseIntercepterService } from './base-intercepter.service';

describe('Service: BaseIntercepter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseIntercepterService]
    });
  });

  it('should ...', inject([BaseIntercepterService], (service: BaseIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});

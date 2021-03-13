/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BodyModificationService } from './BodyModification.service';

describe('Service: BodyModification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodyModificationService]
    });
  });

  it('should ...', inject([BodyModificationService], (service: BodyModificationService) => {
    expect(service).toBeTruthy();
  }));
});

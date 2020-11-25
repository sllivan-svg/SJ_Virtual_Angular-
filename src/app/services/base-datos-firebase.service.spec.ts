import { TestBed } from '@angular/core/testing';

import { BaseDatosFirebaseService } from './base-datos-firebase.service';

describe('BaseDatosFirebaseService', () => {
  let service: BaseDatosFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatosFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

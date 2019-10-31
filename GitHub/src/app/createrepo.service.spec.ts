import { TestBed } from '@angular/core/testing';

import { CreaterepoService } from './createrepo.service';

describe('CreaterepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreaterepoService = TestBed.get(CreaterepoService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DeleterepoService } from './deleterepo.service';

describe('DeleterepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleterepoService = TestBed.get(DeleterepoService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SugService } from './sug.service';

describe('SugService', () => {
  let service: SugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

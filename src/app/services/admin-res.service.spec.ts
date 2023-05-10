import { TestBed } from '@angular/core/testing';

import { AdminResService } from './admin-res.service';

describe('AdminResService', () => {
  let service: AdminResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

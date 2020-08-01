import { TestBed } from '@angular/core/testing';

import { NgxJdenticonService } from './ngx-jdenticon.service';

describe('NgxJdenticonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxJdenticonService = TestBed.get(NgxJdenticonService);
    expect(service).toBeTruthy();
  });
});

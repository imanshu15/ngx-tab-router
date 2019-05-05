import { TestBed } from '@angular/core/testing';

import { NgxTabRouterService } from './ngx-tab-router.service';

describe('NgxTabRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTabRouterService = TestBed.get(NgxTabRouterService);
    expect(service).toBeTruthy();
  });
});

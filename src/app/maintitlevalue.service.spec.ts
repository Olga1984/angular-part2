import { TestBed } from '@angular/core/testing';

import { MaintitlevalueService } from './maintitlevalue.service';

describe('MaintitlevalueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaintitlevalueService = TestBed.get(MaintitlevalueService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MainTitleValueService } from './main-title-value.service';

describe('MainTitleValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainTitleValueService = TestBed.get(MainTitleValueService);
    expect(service).toBeTruthy();
  });
});

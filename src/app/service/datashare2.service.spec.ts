import { TestBed } from '@angular/core/testing';

import { Datashare2Service } from './datashare2.service';

describe('Datashare2Service', () => {
  let service: Datashare2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datashare2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

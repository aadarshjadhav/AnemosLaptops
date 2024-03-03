import { TestBed } from '@angular/core/testing';

import { MyuserlistService } from './myuserlist.service';

describe('MyuserlistService', () => {
  let service: MyuserlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyuserlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

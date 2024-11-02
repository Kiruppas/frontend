import { TestBed } from '@angular/core/testing';

import { MyBlogsServiceService } from './my-blogs.service';

describe('MyBlogsServiceService', () => {
  let service: MyBlogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBlogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

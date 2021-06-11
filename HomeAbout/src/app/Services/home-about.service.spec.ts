import { TestBed } from '@angular/core/testing';

import { HomeAboutService } from './home-about.service';

describe('HomeAboutService', () => {
  let service: HomeAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

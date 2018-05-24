import { TestBed, inject } from '@angular/core/testing';

import { CodeforcesStaticService } from './codeforces-static.service';

describe('CodeforcesStaticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeforcesStaticService]
    });
  });

  it('should be created', inject([CodeforcesStaticService], (service: CodeforcesStaticService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CodeforcesApiService } from './codeforces-api.service';

describe('CodeforcesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeforcesApiService]
    });
  });

  it('should be created', inject([CodeforcesApiService], (service: CodeforcesApiService) => {
    expect(service).toBeTruthy();
  }));
});

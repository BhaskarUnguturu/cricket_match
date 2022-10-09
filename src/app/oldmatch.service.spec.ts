import { TestBed } from '@angular/core/testing';

import { OldmatchService } from './oldmatch.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('OldmatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule],
    providers: [HttpClient],
  }));

  it('should be created', () => {
    const service: OldmatchService = TestBed.get(OldmatchService);
    expect(service).toBeTruthy();
  });
});

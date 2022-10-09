import { TestBed } from '@angular/core/testing';

import { NewmatchDetailsService } from './newmatch-details.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewmatchDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: NewmatchDetailsService = TestBed.get(NewmatchDetailsService);
    expect(service).toBeTruthy();
  });
  it('should have  getNewMatchesService function', () => {
    const service: NewmatchDetailsService  = TestBed.get(NewmatchDetailsService);
    expect(service.getNewMatchesService).toBeTruthy();
   });
});

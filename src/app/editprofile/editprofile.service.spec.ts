import { TestBed } from '@angular/core/testing';

import { EditprofileService } from './editprofile.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

describe('EditprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule],
    providers:[HttpClient,Ng4LoadingSpinnerService]
  }));

  it('should be created', () => {
    const service: EditprofileService = TestBed.get(EditprofileService);
    expect(service).toBeTruthy();
  });
});

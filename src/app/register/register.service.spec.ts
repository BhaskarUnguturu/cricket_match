import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerModule, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    
    imports:[HttpClientModule,Ng4LoadingSpinnerModule],
    providers:[HttpClient,Ng4LoadingSpinnerService]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
});

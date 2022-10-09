import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers:[HttpClient,Ng4LoadingSpinnerService]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDetails } from '../register/registerDetails';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService:HttpClient,private spinner: Ng4LoadingSpinnerService) { }


authenticate(loginToCheck:RegisterDetails){
  this.spinner.show();
return this.httpService.post<any>('http://localhost:8081/authenticate',loginToCheck);
}

}

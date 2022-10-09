import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private httpclient:HttpClient) { }
  isUserAuthenticated() {
    let token = window.sessionStorage.getItem('token');
    if(!token){
      return false;
  }
  else{
    return true;
  }
}

loggedIn(){
  return window.sessionStorage.getItem('token');
}

}

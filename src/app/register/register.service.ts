import { Injectable, OnInit } from '@angular/core';

import { RegisterDetails } from './registerDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit {
  ngOnInit(): void {
   
  }

  constructor(private http: HttpClient, private spinner: Ng4LoadingSpinnerService) { }


  saveUser(formDataToDb: any): Observable<any> {
    const formData = new FormData();
    //console.log(formDataToDb);
    this.spinner.show();
      
    return this.http.post('http://localhost:8083/cMatch/register', formDataToDb);

  }
}

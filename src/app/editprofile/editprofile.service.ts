import { Injectable } from '@angular/core';
import { RegisterDetails } from '../register/registerDetails';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {

  constructor(private httpservice: HttpClient,private spinner :Ng4LoadingSpinnerService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+sessionStorage.getItem('token')
    })
  };
  httpOptionsForImage={
    headers: new HttpHeaders({
      
     // 'Content-Type':'multipart/form-data;boundary=1000000',
      'Authorization': 'Bearer '+sessionStorage.getItem('token')
    })
  }

  checkOldPassword(oldPasword:RegisterDetails):Observable<any>{
    this.spinner.show();
    return this.httpservice.post('http://localhost:8080/cMatch/checkPassword',oldPasword,this.httpOptions);
  }
  updatePassword(updatePassword: RegisterDetails): Observable<any> {
    this.spinner.show();
    return this.httpservice.put('http://localhost:8080/cMatch/updatePassword', updatePassword,this.httpOptions);

  }
  updatePicture(formData:FormData):Observable<any>{
    this.spinner.show();
   // console.log(formData.get('image'));
    
    return this.httpservice.post('http://localhost:8080/cMatch/updateProfilePic',formData,this.httpOptionsForImage);
  }
}

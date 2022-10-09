import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterDetails } from '../register/registerDetails';
import { LoginService } from './login.service';
import { LoginResponse } from './loginResponse';
import { Router } from '@angular/router';
import { ImageReciever } from './image';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private routes: Router, private toastr: ToastrManager, private spinner: Ng4LoadingSpinnerService) { }
  displayForgetPassword = false;
  loginObjectSend: RegisterDetails;
  loginresponse: LoginResponse;
  imageToShow: ImageReciever;
  ngOnInit() {
  }

  loginForm = this.formBuilder.group({
    userEmail: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9\\+]+(\\.[_A-Za-z0-9]+)*@[A-Za-z-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
    userPassword: ['', [Validators.required]],

  });




  loginUser() {
    //amking object of register detail class
    this.loginObjectSend = new RegisterDetails(this.loginForm.value.userEmail, this.loginForm.value.userPassword);
    //sending the object to service as in spring boot i have used request body acepting register object
    this.loginService.authenticate(this.loginObjectSend).subscribe(
      res => {
        //this consist of token
        this.loginresponse = res.valueOf() as LoginResponse;

        sessionStorage.setItem('token', this.loginresponse.token);
        console.log(this.loginresponse.token);
        
        sessionStorage.setItem('username', this.loginresponse.username);
        this.imageToShow = new ImageReciever(this.loginresponse.imageName, this.loginresponse.imagetype, this.loginresponse.imagePic);
        //convertng to json string since we cnt set obj we should pass key and value as string
        sessionStorage.setItem('image', JSON.stringify(this.imageToShow));
        setTimeout(() => {
          window.location.reload();
          this.spinner.hide()
        }, 3000
       
        );
        
        this.toastr.successToastr("Successfully Logged In", " Hi " + sessionStorage.getItem('username'))
        this.routes.navigate(['/dashboard']);
       
       
         
      }, err => {
        this.toastr.errorToastr("Error Occured", err.error);

      }
    )

 
  }
 

}




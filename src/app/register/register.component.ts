import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterDetails } from './registerDetails';
import { RegisterService } from './register.service';
import { ImageToDisplay } from './imageToDisplay';
import { Router } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

class ImagSnippet {
  //src is used for shpowing the image and file is used to save the image
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectefdFile: ImagSnippet;

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private toastr: ToastrManager, private routes: Router, private spinner: Ng4LoadingSpinnerService) { }
  registerModel: RegisterDetails;




  ngOnInit() {

  }
  //making the form builder data from html connect to typesciprt
  registerForm = this.formBuilder.group({
    userEmail: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9\\+]+(\\.[_A-Za-z0-9]+)*@[A-Za-z-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
    userPassword: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*(),./])[a-zA-Z0-9!@#$%^&*(),./]{8,15}$')]],
    userImage: ['', Validators.required],
    userPasswordC: ['']
  })
  //variales
  image: File;
  imagetodisplay: ImageToDisplay;

  //onevent method when i do come changes in the html who has this method on change of anything this ,ethod will get triggered or called
  onFileSelect(event) {
    //this will give mew the file that i a uploading
    if (event.target.files.length > 0) {
      //if the len of the file is gretaer thaqn 0
      const file = event.target.files[0];
      // console.log(event.target.files[0]);

      //converting the object into an iage snippet file
      //
      this.selectefdFile = new ImagSnippet('', file);
      console.log(file);

      //In a callback function, we are creating an instance of the ImageSnippet. 
      //The first value is a base64 representation of an image we will display later on the screen.
      //The second value is a file itself, which we will send to the server for upload 
      //saving it in a file
      this.image = this.selectefdFile.file;


    }
  }
  validateForm(){
    if (this.registerForm.invalid){
       this.registerForm.get('userEmail').markAsTouched();
       this.registerForm.get('userPassword').markAsTouched();
       this.registerForm.get('userImage').markAsTouched();
       return
    }
   }

  //registering user function
  registerUser() {

    if (this.registerForm.value.userPassword != this.registerForm.value.userPasswordC) {

      alert('Password And Confirm Password didnot match');
      return;
    }
    //this.registerModel = new RegisterDetails(this.registerForm.value.userEmail, this.registerForm.value.userPassword, this.registerForm.value.userImage);
    const formData = new FormData();
    //form data is an interface ;like hashmap having key and values

    formData.append('upload', this.image);
    formData.append('username', this.registerForm.value.userEmail);
    formData.append('password', this.registerForm.value.userPassword);
    //console.log(this.registerForm.get('userEmail').value);
    console.log(this.image);
    //passsing the for data fro coponent to service

    this.registerService.saveUser(formData).subscribe(


      res => {
        
        //valueOf is coverting the response to string.
        this.registerModel = res.valueOf() as RegisterDetails;
        console.log(this.registerModel);
        
        // this.toastr.s("Hi" + this.registerModel.cMatchUserName, "You Have Been Registrered Successfully")
        setTimeout(() => {
          this.spinner.hide()
        }, 5000);
        this.toastr.successToastr(" You Have Been Registrered Successfully ", " Hi " + this.registerModel.cMatchUserName)
        this.routes.navigate(['/dashboard'])


      },
      err => {
        console.log(err);
        
        this.toastr.errorToastr("Not Registered Error Occured", err.error.message + "");
      }
    )
  }

}

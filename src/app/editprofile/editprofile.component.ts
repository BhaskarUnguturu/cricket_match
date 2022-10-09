import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterDetails } from '../register/registerDetails';
import { EditprofileService } from './editprofile.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ImageReciever } from '../login/image';

class ImagSnippet {
  //src is used for shpowing the image and file is used to save the image
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})

export class EditprofileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private forgetPasswordService: EditprofileService, private routes: Router, private spinner: Ng4LoadingSpinnerService, private toast: ToastrManager) { }
  userName: string;
  updatePasswordFeild = false;
  imageToDisplay: string;
  forgetPassword: RegisterDetails;
  checkPasswordObject: RegisterDetails;
  updatedImageObject:RegisterDetails;
  updatedImageToGetFormDb:ImageReciever;
  oldpasswordchecked = false;
  imagerRecieved:ImageReciever;
  ngOnInit() {
    this.userName = sessionStorage.getItem('username');
    this.imageToDisplay = JSON.parse(sessionStorage.getItem('image'));

  }

  //form builder connction bw html and ts 
  updatePasswordForm = this.formBuilder.group(
    {

      updatepassword: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*(),./])[a-zA-Z0-9!@#$%^&*(),./]{8,15}$')]]
    }
  )
  checkOldPasswordForm = this.formBuilder.group(
    {

      oldpassword: ['', [Validators.required]]
    }
  )


  updatePictureForm=this.formBuilder.group(
    {
      imageUpdated:['',Validators.required]
    }
  )
  image: File;
  selectefdFile: ImagSnippet;

  //on change file image
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
      this.updatePicture();

    }

  }
  
  updatePicture(){
    const formData = new FormData();
    //form data is an interface ;like hashmap having key and values
    console.log(sessionStorage.getItem('username'));
    console.log(this.image);
    
    formData.append('image', this.image);
    formData.append('username', sessionStorage.getItem('username'));
    console.log(formData);
    
 

    this.forgetPasswordService.updatePicture(formData).subscribe(

      res=>{
        this.updatedImageObject=res.valueOf() as RegisterDetails;
        console.log(this.updatedImageObject);
        
        sessionStorage.removeItem('image');
        this.imagerRecieved=new ImageReciever(this.updatedImageObject.cImageName,this.updatedImageObject.cImageType,this.updatedImageObject.cMatchImage);
        sessionStorage.setItem('image',JSON.stringify(this.imagerRecieved));
        this.refreshpage()
      },err=>{

      }
    )
  }
  refreshpage(){
    this.ngOnInit();
  }





















  //check old password
  checkPassword() {
    this.checkPasswordObject = new RegisterDetails(sessionStorage.getItem('username'), this.checkOldPasswordForm.value.oldpassword);
    this.forgetPasswordService.checkOldPassword(this.checkPasswordObject).subscribe(
      res => {
        console.log(res);
        this.oldpasswordchecked = true;

      }, err => {

      }
    )
  }







  changePassword() {
    this.forgetPassword = new RegisterDetails(sessionStorage.getItem('username'), this.updatePasswordForm.value.updatepassword);

    this.forgetPasswordService.updatePassword(this.forgetPassword).subscribe(
      res => {
        sessionStorage.clear();
        setTimeout(() => {
          this.spinner.hide()
        }, 3000);
        this.toast.successToastr("Successfully Updated!", "Hi User,")
        this.routes.navigate(['/dashboard']);

        console.log(res);

      }, err => {
        this.toast.errorToastr(err.error.message)
      }
    )
  }

  //updation of password checker
  updatePassword() {
    this.updatePasswordFeild = true;
  }


}

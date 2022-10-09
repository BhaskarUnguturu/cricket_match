import { Component, OnInit } from '@angular/core';
import { ImageReciever } from '../login/image';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imageToDisplay: ImageReciever;
  constructor(private router: Router) { }
  notLoggedIn = false;
  ngOnInit() {
    //console.log(sessionStorage.getItem('image'));
//coverting back to object from json string
    this.imageToDisplay = JSON.parse(sessionStorage.getItem('image'));
    if (sessionStorage.getItem('username') != null) {
      this.notLoggedIn = false;
    } else {
      this.notLoggedIn = true;
    }


  }
  logOut() {
    this.notLoggedIn = true;
    if (sessionStorage.getItem('token') != null) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('image');
    }
    this.router.navigate(['/dashboard']);
    window.location.reload();
    this.ngOnInit();
  }

}

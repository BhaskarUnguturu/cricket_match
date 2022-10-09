import { Component, OnInit } from '@angular/core';
import { ImageReciever } from '../login/image';
import { Router, NavigationStart } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageToDisplay: ImageReciever;

  constructor(router: Router) {
    router.events
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          console.log("here");
          router.navigate(['/dashboard'])
        }
      });
      
  }

  ngOnInit() {
    console.log(sessionStorage.getItem('image'));
    this.imageToDisplay = JSON.parse(sessionStorage.getItem('image'));

  }
 
}

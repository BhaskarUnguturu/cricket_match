import { Component, OnInit } from '@angular/core';
import { NewmatchDetailsService } from '../newmatch-details.service';
import { MatchRes } from '../matchRes';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-newmatchcard',
  templateUrl: './newmatchcard.component.html',
  styleUrls: ['./newmatchcard.component.css']
})
export class NewmatchcardComponent implements OnInit {
  notes: Array<any> = [];
  flag: number = 0;
  reco: Array<any> = [];
  validheader: boolean;
  constructor(private newmatchservice: NewmatchDetailsService, private authservice: AuthserviceService, private routes: Router) { }

  newMatchRes: MatchRes[];
  getSearchedText: string;
  p:Number=1;
  count:Number=5;
  email1: string = sessionStorage.getItem('username');
  ngOnInit() {
    //this.validheader = this.authservice.isUserAuthenticated();

    this.newmatchservice.getNewMatchesService().subscribe(
      res => {
        console.log(res);
        this.newMatchRes = res.matches as MatchRes[];

      }, err => {

      });
  }

  recommend(abc) {

    if (this.authservice.loggedIn()) {
      abc.email = this.email1;
      this.newmatchservice.addNote(abc).subscribe(
        data => {
          console.log("bhaskar");
          console.log(data);
        
        }
      )
    }

    else {
      console.log("hi");
      this.routes.navigate(['/login']);

    }
  }
}

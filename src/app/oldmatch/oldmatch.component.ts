import { Component, OnInit } from '@angular/core';
import {OldmatchService} from '../oldmatch.service';
import {OldMatchers} from '../oldmatchers';
import { RecommentComponent } from '../recomment/recomment.component';
 
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-oldmatch',
  templateUrl: './oldmatch.component.html',
  styleUrls: ['./oldmatch.component.css']
})
export class OldmatchComponent implements OnInit {
   
flag:number=0;
reco:Array<any>=[];
validheader:boolean;
email1:string= sessionStorage.getItem('username');
  constructor(private oldmatchservice: OldmatchService,private authservice:AuthserviceService, private routes: Router) { }

  oldMatchRes: OldMatchers[];
  getSearchedText: string;
  rec: RecommentComponent;
  obj: any;
  //pagination details
  p: number = 1;
  count: number =6;
  ngOnInit() {
    this.oldmatchservice.getOldMatchesService().subscribe(
      res => {
        this.oldMatchRes = res.data as OldMatchers[];
        console.log(this.oldMatchRes);
        }, err => {

      });
     }



  recommend(abc)
    {
       if(this.authservice.loggedIn())
        {
          abc.email=this.email1;
              console.log(abc);
              this.oldmatchservice.addNote(abc).subscribe(
                  data=>{
                  }
                )
            }
            else{
             console.log("hi");
             this.routes.navigate(['/login']);
           
            }
     }
  }
 



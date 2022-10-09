import { Component, OnInit, OnChanges } from '@angular/core';
import { OldmatchService } from '../oldmatch.service';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';
@Component({
  selector: 'app-recomment',
  templateUrl: './recomment.component.html',
  styleUrls: ['./recomment.component.css']
})
export class RecommentComponent implements OnInit {
  validheader:boolean;
notes:Array<any>=[];
p: number = 1;
  count: number = 10;
  reco:Array<any>=[];
  abc:boolean;
  constructor(private oldmatchservice :OldmatchService,private authservice:AuthserviceService, private routes: Router) {
    this.authservice.loggedIn
   }

 //get all recommends by the particular user

  ngOnInit() {
    //if(this.abc){
      this.oldmatchservice.getallrecommendnotes().subscribe(
       data=>{
         console.log(data);
         this.notes=data;
         console.log(this.notes);
       },
       error=>{
         console.log(error);
       }
     )
   }
 // } 

 //delete the recommend by the particular user
recommend(abc){

  if(this.authservice.loggedIn())
{
  this.oldmatchservice.getallrecommendnotes().subscribe(
    data=>{
    this.reco=data;
    for (var index1 in this.reco)
    {
      if(abc.unique_id==this.reco[index1].unique_id)
      {
          let id:number=this.reco[index1].id;
          this.oldmatchservice.deleteNote(id).subscribe(
          res=>{
          console.log("deleted");
         
           
          },
          error=>{
          console.log(error);
          })
        }
      }
    });

}
  
   

else{
  
  this.routes.navigate(['/login']);

}
}
}
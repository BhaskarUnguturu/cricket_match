import { Component, OnInit } from '@angular/core';
import { NewmatchDetailsService } from '../newmatch-details.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-newrecommends',
  templateUrl: './newrecommends.component.html',
  styleUrls: ['./newrecommends.component.css']
})
export class NewrecommendsComponent implements OnInit {
  notes: Array<any> = [];
  p: number = 1;
  count: number = 5;
  reco: Array<any> = [];
  validheader: boolean;
  constructor(private newmatchservice: NewmatchDetailsService, private authservice: AuthserviceService, private routes: Router) { }
//get all recommends by particular user in the database
  ngOnInit() {
    this.newmatchservice.getallrecommendnotes().subscribe(
      data => {
        console.log(data);
        this.notes = data;
        console.log(this.notes);
      },
      error => {
        console.log(error);
      }
    )

  }

//unrecommemnd i,e delete the recommend node from the databse 
  recommend(abc) {

    if (this.authservice.loggedIn()) {
      this.newmatchservice.getallrecommendnotes().subscribe(
        data => {
          this.reco = data;
          for (var index1 in this.reco) {
            if (abc.unique_id == this.reco[index1].unique_id) {
              let id: number = this.reco[index1].id;
              this.newmatchservice.deleteNote(id).subscribe(
                res => {
                  console.log("deleted");


                },
                error => {
                  console.log(error);
                })
            }
          }
        });

    }


    else {

      this.routes.navigate(['/login']);
    }

  }
}


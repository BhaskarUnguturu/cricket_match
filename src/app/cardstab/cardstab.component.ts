import { Component, OnInit } from '@angular/core';
import { NewmatchDetailsService } from '../newmatch-details.service';
import { MatchRes } from '../matchRes';
import { OldmatchService } from '../oldmatch.service';

@Component({
  selector: 'app-cardstab',
  templateUrl: './cardstab.component.html',
  styleUrls: ['./cardstab.component.css']
})
export class CardstabComponent implements OnInit {

  constructor(private newmatchService: NewmatchDetailsService,private oldmatchservice :OldmatchService) { }

  newMatchRes:MatchRes[];
 
  ngOnInit() {
    this.newmatchService.getNewMatchesService().subscribe(
      res => {
        this.newMatchRes=res.matches as MatchRes[];
                
      }, err => {

      }
    );
  }

   

   
}



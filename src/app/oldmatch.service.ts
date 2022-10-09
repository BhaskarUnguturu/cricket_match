import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { OldMatchers } from './oldmatchers'; 
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class OldmatchService {
delete1:number;
addingnote:boolean;
email1:string= sessionStorage.getItem('username');
  notes:Array<OldMatchers>=[];
  subject:BehaviorSubject<Array<OldMatchers>>=new BehaviorSubject(this.notes);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+sessionStorage.getItem('token')
    })
  };
  fetchNotesFromServer(){
    return this.http.get<Array<OldMatchers>>('http://localhost:8082/api/recommends' +'/'+this.email1,this.httpOptions).subscribe((data)=>{
      this.notes=data;
      console.log(data+"my name is bhaskar");
      this.subject.next(this.notes);
    })
  }
  constructor(private http: HttpClient) {
    this.fetchNotesFromServer();
   }


  getOldMatchesService(): Observable<any> {
    this.fetchNotesFromServer();

    return this.http.get<any>('https://cricapi.com/api/cricket?apikey=FYitmMCPLlfjUL0Y5Cr2hKDPuJW2');

  }
  
  addNote(abc:OldMatchers){
   this.addingnote= this.addingNote1(abc);
   if(this.addingnote)
   {
      console.log("already data is present");
      window.alert("you already added to recommendations");
   }
   else{
    window.alert("succesfulled added");
    return this.http.post<OldMatchers>('http://localhost:8082/api/recommend/create',abc,this.httpOptions)
    .do(addnote=>{
      this.notes.push(addnote);
      this.subject.next(this.notes);
    });
  }
}
 deleteNote(id:number){
   
  this.delete(id);
   return this.http.delete('http://localhost:8082/api/recommend'+'/'+id,this.httpOptions);
   
  }
   getallrecommendnotes(){
     return this.subject;
    }

  delete(id:number) {
     //this.deleteNote(id);
     console.log("good morning"+id);
     console.log(this.notes);
     for(let i=0;i<this.notes.length;i++){
      if(id==this.notes[i].id){
        this.delete1=i;
        console.log("finding element" +this.delete1);
        this.notes.splice(this.delete1,1);
        console.log(this.notes);
        this.subject.next(this.notes);
        break;
      }

     }
    // const id1:number=this.notes.indexOf()


     
   }

   addingNote1(abc:OldMatchers){
   for(let i=0;i<this.notes.length;i++){
      if(abc.unique_id==this.notes[i].unique_id){
        return true;
        
        
   }
  }
   }
}

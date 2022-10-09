import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatchRes } from './matchRes';

@Injectable({
  providedIn: 'root'
})
export class NewmatchDetailsService {
  delete1:number;
  notes:Array<MatchRes>=[];
  addingnote:boolean;
  email1:string= sessionStorage.getItem('username');
  subject:BehaviorSubject<Array<MatchRes>>=new BehaviorSubject(this.notes);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+sessionStorage.getItem('token')
    })
  };
  fetchNotesFromServer(){
    return this.http.get<Array<MatchRes>>('http://localhost:8082/api1/recommends' +'/'+this.email1,this.httpOptions).subscribe((data)=>{
      this.notes=data;
      console.log(this.notes+"bhaskarchennai");
      this.subject.next(this.notes);
    })
  }

  constructor(private http:HttpClient) { 
    this.fetchNotesFromServer();
  }


  getNewMatchesService(): Observable<any> {
    return this.http.get<any>('https://cricapi.com/api/matches?apikey=FYitmMCPLlfjUL0Y5Cr2hKDPuJW2');
    
  }


  addNote(abc:MatchRes){
    this.addingnote= this.addingNote1(abc);
    if(this.addingnote)
    {
       console.log("already data is present");
       window.alert("you already added to recommendations");
    }
    else{
      window.alert("succesfulled added");
    console.log(abc);
    
    return this.http.post<MatchRes>('http://localhost:8082/api1/newrecommend/create',abc,this.httpOptions)
    
    .do(addnote=>{
      this.notes.push(addnote);
      this.subject.next(this.notes);
    });
  }
}
 deleteNote(id){
   console.log(id);
   this.delete(id);
   return this.http.delete('http://localhost:8082/api1/newrecommend'+'/'+id,this.httpOptions);
   }
   getallrecommendnotes(){
    return this.subject;
    
   }

   delete(id1:number) {
    console.log("good morning"+id1);
    console.log(this.notes);
    for(let i=0;i<this.notes.length;i++){
     if(id1==this.notes[i].id){
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


  addingNote1(abc:MatchRes){
    for(let i=0;i<this.notes.length;i++){
       if(abc.unique_id==this.notes[i].unique_id){
         return true;
         
         
    }
   }
    }

}

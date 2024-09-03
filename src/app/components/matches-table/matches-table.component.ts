import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatchService} from 'src/app/services/match.service';


@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
 matchesTab:any=[
   
 ];

  
 
 resultColor(s1:number,s2:number){
  let color:String;
  if(s1>s2){
   color= 'green';}
   else if(s1<s2){
    color= 'red';
   }
   else{
   color= 'blue';
   }
   return color ;
   }
  scoreResult(s1:number,s2:number){
  let color:String;
  if(s1>s2){
   color= 'Win';
  }
   else if(s1<s2){
    color= 'Loss';
   }
   else{
   color= 'Draw';
   }
   return color ;
   }
   scoreRes(s1:number,s2:number,t2:string){
    let  T=[];
    if (s1>s2) {
      T=["win"];
    } else if(s1<s2){
      T=["Loss"];
    }
    else{
      T=["Draw"];
    }
    return T;
   }
 
 
  constructor(private router:Router , private mService: MatchService) { }

  ngOnInit() {
    //this.matchesTab=JSON.parse(localStorage.getItem('matches')||'[]');
    this.mService.getAllMatches().subscribe(
      (response)=>{
        this.matchesTab=response.T;
      }
    );
  }

  
  deleteMatch(id:number){
    
 this.mService.deleteMatchById(id).subscribe(
  (response)=>{
    console.log("here response after Delete",response);
    this.mService.getAllMatches().subscribe(
      (data)=>{
        this.matchesTab=data.T;
      }
    );
  }

 );
 }
 
 goToEdit(id:number){
   this.router.navigate([`editMatch/${id}`]);
    this.mService.editMatch(id).subscribe(
      (response)=>{
        console.log("here response after edit",response);
        this.mService.getAllMatches().subscribe(
          (data)=>{
            this.matchesTab=data.T;
          }
        );
      }
    );

 }


 goToInfo(id:number){
   this.router.navigate([`matchInfo/${id}`]);
   
 }
}

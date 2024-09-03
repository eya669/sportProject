import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab:any=[];
  
  displayDelEdit(id:number,msg:string){
    alert('team Num°'+id+" " +msg);
  }
  constructor(private router:Router , 
    private tService: TeamService) { }

  ngOnInit(): void {
  this.tService.getAllTeams().subscribe(
    (data)=>{
      console.log("teams",data.teams);
     this.teamsTab=data.teams;
    }
  )
  }
  goToInfo(id:number){
   this.router.navigate([`teamInfo/${id}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`teamEdit/${id}`]);

  }
  deleteTeam(id:number){
   this.tService.deteteTeam(id).subscribe(
    (response)=>{
      console.log("here response after Delete",response);
       this.tService.getAllTeams().subscribe(
        (data)=>{
          this.teamsTab=data.teams;
        }
       );
    }
   );

  }
  }


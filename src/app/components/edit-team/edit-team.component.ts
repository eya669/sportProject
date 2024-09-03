import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  team:any={};
  teamForm!:FormGroup;
  teamId:any;
  constructor(private activatedRoute:ActivatedRoute ,private router:Router,private tService:TeamService) { }

  ngOnInit(): void {
    this.teamId=this.activatedRoute.snapshot.params['id'];
    this.tService.getTeamById(this.teamId).subscribe(
      (data)=>{
        console.log("Here data from BE",data);
        this.team=data.team;
      }
    );
  }
  editTeam(){
   this.tService.editTeam(this.team).subscribe(
    (response)=>{
      console.log("here after update",response.msg);
    }
   );
    this.router.navigate(['admin']);
    
  }
}

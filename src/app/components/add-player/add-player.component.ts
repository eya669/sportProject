import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
player:any={};
teams:any=[];
playerForm! :FormGroup;
  constructor(private pService:PlayerService,private router:Router,private tService: TeamService) { }

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe(
      (data)=>{
        console.log("here team  ",data);

        this.teams=data.teams;
      }
    );
    
  }
  addPlayer(){
    console.log('Add player ', this.player);
    this.pService.addPlayer(this.player).subscribe(
     (response)=>{
      console.log("here response after adding player",response);
       this.router.navigate(['/admin']);
     }
    );
  
  }
  
}

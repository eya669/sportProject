import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
team:any={};
teamForm!:FormGroup;
  constructor(private tService:TeamService,private router:Router) { }

  ngOnInit(): void {
  }
addTeam(){
  console.log('Add team ', this.team);
    this.tService.addTeam(this.team).subscribe(
     (response)=>{
      console.log("here response after adding team",response.msg);
       this.router.navigate(['/admin']);
     }
    );
}


}

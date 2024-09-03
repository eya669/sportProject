import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm!:FormGroup;
  player:any={};
  playerId:any;
  constructor(private activatedRoute:ActivatedRoute ,private router:Router, private pService:PlayerService) { }

  ngOnInit(): void {
    this.playerId=this.activatedRoute.snapshot.params['id'];
    this.pService.getPlayerById(this.playerId).subscribe(
      (data)=>{
        console.log("Here data from BE",data);
        this.player=data.player;
      }
    );
  }
  editPlayer(){
    this.pService.editPlayer(this.player).subscribe(
      (response)=>{
        console.log("here after update",response.msg);
      }
    );
    this.router.navigate(['admin']);
  }
  }


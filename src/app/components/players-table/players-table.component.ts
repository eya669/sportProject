import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab:any=[
    
  ];
  

  constructor(private router:Router,
    private pService: PlayerService
  ) { }

  ngOnInit(): void {
   // this.playersTab=JSON.parse(localStorage.getItem('players')||'[]');
  this.pService.getAllPlayers().subscribe(
    (response)=>{
      this.playersTab=response.T;
    }
  );

  }
  goToInfo(id:number){
    this.router.navigate([`playerInfo/${id}`]);
    

  }
  goToEdit(id:number){
   this.router.navigate([`playerEdit/${id}`])
  }
  delete(id:number){
    this.pService.deletePlayerById(id).subscribe(
      (response)=>{
        console.log("here response after Delete",response);
        this.pService.getAllPlayers().subscribe(
          (data)=>{
            this.playersTab=data.T;
          }
        );
      }
    
     );

  }
}

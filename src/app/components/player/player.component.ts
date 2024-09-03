import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playTab:any=[
    {id:1,name:"Cristiano",position:"ATK",number:7,age:38 },
    {id:2,name:"Belaili",position:"ATK",number:10,age:32 },
    {id:3,name:"Modric",position:"MID",number:10,age:38 },
    {id:4,name:"Cylian Mbappé",position:"ATK",number:9,age:24},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
  stadiumTab:any=[
    {id:1,name:"Rades",Capacity:65000,country:"Tunisia"},
    {id:2,name:"Bernabeu",Capacity:120000,country:"Spain,Madrid" },
    {id:3,name:"Camp Nou",Capacity:90000,country:"Spain,Barcelonne" },
    {id:4,name:"wembley",Capacity:110000,country:"Angleterre,London",},
  ];
  displayDelEdit(id:number,msg:string){
    alert('stadium Num°'+id+" " +msg);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  titre:string='admin'
   match:string="Matches";
   player:string="Players";
   team:string="teams";
   titles:any=['Matches','Players','Teams','Stadiums'];
   
  constructor() { }

  ngOnInit(): void {
  }

}

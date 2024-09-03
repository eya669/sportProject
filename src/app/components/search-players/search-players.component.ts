import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.css']
})
export class SearchPlayersComponent implements OnInit {
  

  searchPlayer:any;
  searchForm!:FormGroup;
  constructor(private formBuilder :FormBuilder,private pService:PlayerService) { }

  ngOnInit(): void {
    this.searchForm= this.formBuilder.group({
      age:['',[Validators.required,]]
      
    });

  }
  search(){
   
    console.log("here",this.searchForm.value);
    this.pService.searchPlayer(this.searchForm.value).subscribe(
      (data)=>{
        console.log("here response after search",data.search);
        this.searchPlayer=data.search;
      }
    );

  }
}

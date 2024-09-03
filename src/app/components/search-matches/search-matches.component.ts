import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  
  searchTab:any;
  searchForm!:FormGroup;
  match:any={};
  constructor(private formBuilder :FormBuilder, private mService: MatchService) { }
  ngOnInit(): void {
    this.searchForm=this.formBuilder.group({
      scoreOne:['',[Validators.required]],
      scoreTwo:['',[Validators.required]],
     
    });
    
    
  }
  searchh(){
    console.log("here",this.searchForm.value);
    this.mService.searchMatch(this.searchForm.value).subscribe(
      (data)=>{
        console.log("here response after search",data.search);
        this.searchTab=data.search;
      }
    );
    
    }
}

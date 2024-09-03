import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchId: any;
  match: any = {};
  matchForm!:FormGroup;
  constructor(private activatedRoute:ActivatedRoute ,
     private router:Router ,
     private mService:MatchService)   { }

  ngOnInit(): void {
    this.matchId = this.activatedRoute.snapshot.params['id'];
     this.mService.getMatchById(this.matchId).subscribe(
      (data)=>{
        console.log("here data fromBE",data);
        this.match=data.match;
      }
     );
  }
  editMatch(){
    this.mService.editMatch(this.match).subscribe(
      (response)=>{
        console.log("here response after update",response.msg);
      }
    );
    this.router.navigate(['admin']);
  }
}

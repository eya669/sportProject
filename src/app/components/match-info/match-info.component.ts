import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  matchId: any;
  match: any = {};
  constructor(private activatedRoute: ActivatedRoute, private mService: MatchService) { }

  ngOnInit(): void {

    this.matchId = this.activatedRoute.snapshot.params['id'];
    this.mService.getMatchById(this.matchId).subscribe(
      (response) => {
        console.log("Here match from BE", response);
        this.match=response.match;
      }
    );
  }

}

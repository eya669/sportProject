import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {



  //adresse du serveur BE/destination
  matchUrl: string = "http://localhost:3000/matches";
  constructor(private httpClient: HttpClient) { }
  //request to Get all Matches
  //reponse: array of objects
  getAllMatches() {
    return this.httpClient.get<{ T: any }>(this.matchUrl);
  }
  //request to get by id
  //reponse: one Object
  getMatchById(id: any) {
    //return this.httpClient.get(this.matchUrl +"/"+id);
    return this.httpClient.get<{ match: any }>(`${this.matchUrl}/${id}`);
  }
  //request to delete object bu id
  //response:boolen /string 
  deleteMatchById(id: any) {
    return this.httpClient.delete<{ isDeletd: boolean }>(`${this.matchUrl}/${id}`);

  }
  //request to Add Match
  //response:booleen/string
  addMatch(matchObj: any) {
    return this.httpClient.post<{ msg: string }>(this.matchUrl, matchObj);
  }
  //request to Edit Match
  //response:booleen/string
  editMatch(newMatch: any) {
    return this.httpClient.put<{msg:string}>(this.matchUrl, newMatch);
  }
  //request to get player by id
  //reponse: one Object
searchMatch(obj:any){
  return this.httpClient.post<{search:any}>(this.matchUrl+"/search",obj);
}
}


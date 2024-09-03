import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL:string="http://localhost:3000/teams";
  constructor( private http:HttpClient ) { }
 addTeam(team:any){
  return this.http.post<{msg:string}>(this.teamURL,team);
 }
 deteteTeam(id:any){
  return this.http.delete(`${this.teamURL}/${id}`);
 }
getAllTeams(){
  return this.http.get<{teams:any}>(this.teamURL);
}
editTeam(team:any){
  return this.http.put<{msg:string}>(this.teamURL,team);
}
getTeamById(id:any){
return this.http.get<{team:any}>(`${this.teamURL}/${id}`)
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL:string="http://localhost:3000/players";
  constructor( private http:HttpClient) { }
addPlayer(obj:any){
  return this.http.post<{msg:string}>(this.playerURL,obj);
}
editPlayer(obj:any){
  return this.http.put<{msg:string}>(this.playerURL,obj);
}

getAllPlayers(){
  return this.http.get<{T:any}>(this.playerURL);
}

getPlayerById(id:any){
  return this.http.get<{player:any}>(`${this.playerURL}/${id}`);
}

deletePlayerById(id:any){
  return this.http.delete(`${this.playerURL}/${id}`);
}
searchPlayer(obj:any){
  return this.http.post<{search:any}>(this.playerURL+"/searchPlayer",obj);
}


}

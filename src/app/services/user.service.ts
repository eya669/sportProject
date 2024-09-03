import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userUrl:string="http://localhost:3000/users";
  constructor(private httpClient:HttpClient) { }


  

//adduser(signup)
//user{fn,ln,email,pwd,tel,role}
  addUser(obj:any,photo:File){
    let fData=new FormData();
    fData.append("firstName",obj.firsName);
    fData.append("lastName",obj.lastName);
    fData.append("email",obj.email);
    fData.append("password",obj.password);
    fData.append("role",obj.role);
    fData.append("img",photo);
  return this.httpClient.post<{isAdded:boolean,msg:string}>(this.userUrl+"/signup",fData);
  }
  //user{email,pwd}
  login(user:any){
return this.httpClient.post<{msg:string,user:string}>(this.userUrl,user);
  }
}

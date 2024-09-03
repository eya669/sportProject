import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any = {};
  msgEror!: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    console.log("here object", this.user);
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log("here data after login", data.msg);
        console.log("here data after login", data.user);
        //success login
        if (data.user) {
          let decoded: any = jwtDecode(data.user);
          //token chaine encodé fiha objet usertoSend lezemha decodage
          sessionStorage.setItem("token",data.user);
          if (decoded.role == "client") {
            this.router.navigate(['/']);
          }
          else {
            this.router.navigate(['admin']);
          }
        }
        else {
          this.msgEror = "Please check Email/Password"
        }
      }
    );
  }

}

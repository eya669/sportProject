import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  user: any = {};
  path!: string;
  erreur!: string;
  photos:any;
  //les attributs==>  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log("here path", this.path);
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmPassword: ['', []],
      tel: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]]
    });

  }
  Signup() {
    //console.log('here user object',this.signupForm.value);
    if (this.path == "/signupAdmin") {
      this.signupForm.value.role = 'admin';
    }
    else {
      this.signupForm.value.role = 'client';
    }
    console.log("here user", this.signupForm.value);

    this.userService.addUser(this.signupForm.value,this.photos).subscribe(
      (response) => {
        console.log("here response after adding user", response);
        if (response.isAdded == true) {
          this.router.navigate(['signin']);

        }
        else {
          //display error msg
          this.erreur = response.msg
        }

      }
    );
  }
  selectFile(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length> 0) {
      this.photos = inputElement.files[0];
      //console.log("here file",photos);
    }

  }
}

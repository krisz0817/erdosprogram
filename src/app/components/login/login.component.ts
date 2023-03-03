import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { passwordShowHide } from '../ts/input';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  toReg = document.getElementById('#toReg');
  toLog = document.getElementById('#toLog');
  logForm = document.getElementById('#log_form');
  regForm = document.getElementById('#reg_form');

  email:any; password:any;

  user: User = {
    id: 0,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    token: '',
    role_id: 0,
    role_name: '',
    status_id: 0,
    status_name: '',
    school_id: 0,
    teacher: '',
    class: 0,
    statement_file: '',
    application_file: '',
    createdAt: new Date,
    updatedAt: new Date
  };

  constructor(private http: HttpClient, private userService: UserService, private router: Router, private cookieService: CookieService) { }

  login(){
    if(this.email != undefined && this.password != undefined){
      const data = {
        email: this.email,
        password: this.password,
        method: "LOGIN"
      }
      this.userService.login(data).subscribe((response: any) => {
        if(response.hasOwnProperty("role_id")){
          this.user = response;
          this.cookieService.delete('user');
          this.cookieService.set('user', JSON.stringify(this.user));
          this.router.navigate(['/']);
        } else {
          if(response.hasOwnProperty("role_id")) {
          }
        }
      });
    }
  }

  ngOnInit(): void {
    passwordShowHide("password", "password_btn");
  }
}

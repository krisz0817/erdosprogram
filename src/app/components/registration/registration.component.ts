import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.interface';
import { EmailService } from 'src/app/services/email/email.service';
import { UserService } from 'src/app/services/user/user.service';
import { passwordShowHide } from '../ts/input';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email:any; password:any; password_cont:any; firstname:any; lastname: any; isTeacher: any = 0;

  user: User = JSON.parse(this.cookieservice.get('user'));

  constructor(private http: HttpClient, private userService: UserService, private router: Router, private emailService: EmailService, private cookieservice: CookieService) { }

  registration(){
    document.getElementById("error1")!.style.display="none";
    document.getElementById("error2")!.style.display="none";
    if(this.email != undefined && this.password != undefined && this.password_cont != undefined && this.firstname != undefined && this.lastname!= undefined && this.isTeacher != undefined){
      const data = {
        email: this.email,
        password: this.password,
        password_cont: this.password_cont,
        firstname: this.firstname,
        lastname: this.lastname,
        isTeacher: this.isTeacher,
        method: "POST"
      }
      if(data.password == data.password_cont)
      this.userService.create(data).subscribe((response: any) => {
        if(Array.isArray(response.message) && response.message[0]!=0){
            this.emailService.sendRegistrationEmail(data).subscribe((response)=>{

            });
            this.router.navigate(["registration-complete"]);
        }else{
            if(response.message == "Existing!") {
              document.getElementById("error1")!.style.display="block";
            } else {
              document.getElementById("error2")!.style.display="block";
            }
        }
      });
    }
  }

  ngOnInit(): void {
    let x = document.getElementById("password");
    let y = document.getElementById("password_btn");
    y?.addEventListener('click', function(){
      if(x?.attributes[1].value === "password") {
        x.attributes[1].value = "text";
      } else {
        x!.attributes[1].value = "password";
      }
    })

    let x2 = document.getElementById("password_again");
    let y2 = document.getElementById("password_again_btn");
    y2?.addEventListener('click', function(){
      if(x2?.attributes[1].value === "password") {
        x2.attributes[1].value = "text";
      } else {
        x2!.attributes[1].value = "password";
      }
    })
  }

}

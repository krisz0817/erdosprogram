import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { GlobalvarsService } from 'src/app/services/globalvars/globalvars.service';
import { LoginComponent } from 'src/app/components/login/login.component';
import { User } from 'src/app/models/user.interface';
import { Router } from '@angular/router';
import { StudentAuthGuard } from 'src/app/authgurads/student-auth-guard.guard';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  contact_name: any;
  contact_address: any;
  contact_phone: any;
  identifier: any;

  user: User = JSON.parse(this.cookieService.get('user'));
  studentAuthGuard: StudentAuthGuard;

  constructor(private http: HttpClient, private globalvarsService: GlobalvarsService, private loginComp: LoginComponent, private router: Router, private cookieService: CookieService) {
    this.studentAuthGuard = new StudentAuthGuard(router, cookieService);
    globalvarsService.getContacts().subscribe((response:any)=>{
      response.forEach((variable:any) => {
        if(variable.variable == "contact_name") this.contact_name = variable.value;
        if(variable.variable == "contact_address") this.contact_address = variable.value;
        if(variable.variable == "contact_phone") this.contact_phone = variable.value;
        if(variable.variable == "identifier") this.identifier = variable.value;
      });
    })
  }

  ngOnInit(): void {
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul > li").hover(function(e) {
      if (window.innerWidth > 1000) {
        $(this).children("ul").stop(true, false).fadeToggle(150);
        e.preventDefault();
      }
    });
    $(".menu > ul > li").click(function() {
      if (window.innerWidth <= 1000) {
        $(this).children("ul").fadeToggle(150);
      }
    });
    $(".menu-mobile").click(function(e) {
      $(".menu > ul").toggleClass('show-on-mobile');
      e.preventDefault();
    });

    $(window).on('resize', function() {
      $(".menu > ul > li").children("ul").hide();
      $(".menu > ul").removeClass('show-on-mobile');
    });
  }

  logout() {
    this.user = {
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
    }
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
  }

}

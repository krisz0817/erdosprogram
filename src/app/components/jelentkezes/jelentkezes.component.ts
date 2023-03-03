import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEventService } from 'src/app/services/user_event/user_event.service';
import { EmailService } from 'src/app/services/email/email.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-jelentkezes',
  templateUrl: './jelentkezes.component.html',
  styleUrls: ['./jelentkezes.component.scss']
})
export class JelentkezesComponent implements OnInit {

  user = JSON.parse(this.cookieservice.get('user'));
  event: any = {
    id: 0,
    name: '',
    location: '',
    start_date: new Date,
    end_date: new Date,
    status_id: 0,
    status: '',
    friday_lunch: 0,
    friday_dinner: 0,
    saturday_breakfast: 0,
    saturday_lunch: 0,
    saturday_dinner: 0,
    sunday_breakfast: 0,
    sunday_lunch: 0,
    friday_room: 0,
    saturday_room: 0,
    createdAt: new Date,
    updatedAt: new Date
  };
  user_event: any = {
    friday_lunch: 0,
    friday_dinner: 0,
    saturday_breakfast: 0,
    saturday_lunch: 0,
    saturday_dinner: 0,
    sunday_breakfast: 0,
    sunday_lunch: 0,
    friday_room: 0,
    saturday_room: 0,
    total: 0,
    billing_name: "",
    billing_address: "",
    comment:""
  }
  id: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private eventService: EventService, private http: HttpClient, private usereventService: UserEventService, private emailService: EmailService, private cookieservice: CookieService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
        this.eventService.getById(this.id).subscribe((response: any)=>{
          this.event = response;
          const datepipe: DatePipe = new DatePipe('en-US')
          this.event.start_date = datepipe.transform(this.event.start_date, 'YYYY. MM. dd.')
          this.event.end_date = datepipe.transform(this.event.end_date, 'YYYY. MM. dd.')
      });

    });
  }

  calculate() {
    this.user_event.total = 0;
    if(this.user_event.friday_lunch==1) {
      this.user_event.total += this.event.friday_lunch;
    }
    if(this.user_event.friday_dinner==1) {
      this.user_event.total += this.event.friday_dinner;
    }
    if(this.user_event.saturday_breakfast==1) {
      this.user_event.total += this.event.saturday_breakfast;
    }
    if(this.user_event.saturday_lunch==1) {
      this.user_event.total += this.event.saturday_lunch;
    }
    if(this.user_event.saturday_dinner==1) {
      this.user_event.total += this.event.saturday_dinner;
    }
    if(this.user_event.sunday_breakfast==1) {
      this.user_event.total += this.event.sunday_breakfast;
    }
    if(this.user_event.sunday_lunch==1) {
      this.user_event.total += this.event.sunday_lunch;
    }
    if(this.user_event.friday_room==1) {
      this.user_event.total += this.event.friday_room;
    }
    if(this.user_event.saturday_room==1) {
      this.user_event.total += this.event.saturday_room;
    }
  }

  join() {
    const input = {
      method: "POST",
      user_id: this.user.id,
      event_id: this.event.id,
      friday_lunch: this.user_event.friday_lunch,
      friday_dinner: this.user_event.friday_dinner,
      saturday_breakfast: this.user_event.saturday_breakfast,
      saturday_lunch: this.user_event.saturday_lunch,
      saturday_dinner: this.user_event.saturday_dinner,
      sunday_breakfast: this.user_event.sunday_breakfast,
      sunday_lunch: this.user_event.sunday_lunch,
      friday_room: this.user_event.friday_room,
      saturday_room: this.user_event.saturday_room,
      billing_name: this.user_event.billing_name,
      billing_address: this.user_event.billing_address,
      comment: this.user_event.comment
      };
      console.log(input);
    this.usereventService.create(input).subscribe((respone:any)=>{
      console.log(respone);
      this.emailService.sendEventApplication({email: this.user.email}).subscribe((response)=>{
        console.log(response);
        this.router.navigate(["/"]);
      });
    })
  }
}

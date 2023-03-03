import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CookieService } from 'ngx-cookie-service';
import { JoinAuthGuard } from 'src/app/authgurads/join-auth-guard.guard';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-jelentkezes-foglalkozasra',
  templateUrl: './jelentkezes-foglalkozasra.component.html',
  styleUrls: ['./jelentkezes-foglalkozasra.component.scss']
})
export class JelentkezesFoglalkozasraComponent {
  details: any = document.getElementsByClassName('details');
  events: any;
  joinAuthGuard : JoinAuthGuard;
  constructor(private http: HttpClient, private eventService: EventService, private router: Router, private cookieservice: CookieService) {
    this.joinAuthGuard = new JoinAuthGuard(router, cookieservice);
    eventService.getAll().subscribe((response)=>{
      this.events = response.filter((event: any)=>{return event.status_id == 2});
      const datepipe: DatePipe = new DatePipe('en-US')
      this.events.forEach((event:any) => {
        event.start_date = datepipe.transform(event.start_date, 'YYYY. MM. dd.')
        event.end_date = datepipe.transform(event.end_date, 'YYYY. MM. dd.')
      });
    })
  }

  details_btn(a: number) {
    $('#details_'+a).toggle();
  }

  join(id: number){
    if(this.joinAuthGuard.canActivate2()){
      this.router.navigateByUrl("/jelentkezes/"+id);
    }
  }
}

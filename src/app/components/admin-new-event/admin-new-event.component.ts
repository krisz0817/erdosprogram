import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventInterFace } from 'src/app/models/event.interface';
import { EventService } from 'src/app/services/event/event.service';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-admin-new-event',
  templateUrl: './admin-new-event.component.html',
  styleUrls: ['./admin-new-event.component.scss']
})
export class AdminNewEventComponent implements OnInit {

  event : EventInterFace = {
    id: 0,
    name : "",
    location: "",
    start_date: new Date,
    end_date: new Date,
    status_id: 0,
    status: "",
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
  statuses: any;
  id: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private eventService: EventService, private statusService : StatusService) {
    statusService.getStatuses().subscribe((response:any)=>{
      this.statuses = response;
    });
  }


   ngOnInit() {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
      if(this.id != null)
        this.eventService.getById(this.id).subscribe((response)=>{
          this.event = response;
          this.event.status_id=1;
          this.event.status = "Függőben";
      })
      });
   }

   createEvent(){
    let data = {
      method: "POST",
      id: this.event.id,
      name : this.event.name,
      location: this.event.location,
      start_date: this.event.start_date,
      end_date: this.event.end_date,
      status_id: this.event.status_id,
      status: this.event.status,
      friday_lunch: this.event.friday_lunch,
      friday_dinner: this.event.friday_dinner,
      saturday_breakfast: this.event.saturday_breakfast,
      saturday_lunch: this.event.saturday_lunch,
      saturday_dinner: this.event.saturday_dinner,
      sunday_breakfast: this.event.sunday_breakfast,
      sunday_lunch: this.event.sunday_lunch,
      friday_room: this.event.friday_room,
      saturday_room: this.event.saturday_room,
      createdAt: new Date,
      updatedAt: new Date
    }
    if(data.location!=""&&data.name!=""&&data.start_date<data.end_date){
      this.eventService.create(data).subscribe((response:any)=>{
        if(response[0]>0){
          this.router.navigateByUrl('/admin/events');
        }
      })
    }
   }

}

import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/services/leader/leader.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vezetok',
  templateUrl: './vezetok.component.html',
  styleUrls: ['./vezetok.component.scss']
})
export class VezetokComponent implements OnInit {
  _baseUrl2 = "";

  leaders: any;

  constructor(private http: HttpClient, private leaderService: LeaderService) {
    leaderService.getAll().subscribe((response)=>{
      this.leaders = response;
      this.leaders.forEach((leader:any) => {
        if(leader.title == null) {
          leader.title = "";
        }
        leader.cv = this._baseUrl2 + leader.cv;
      });
    })
  }

  ngOnInit(): void {
  }

}

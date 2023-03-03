import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school.interface';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-admin-create-school',
  templateUrl: './admin-create-school.component.html',
  styleUrls: ['./admin-create-school.component.scss']
})
export class AdminCreateSchoolComponent implements OnInit {

  school: School = {
    id: 0,
    name: '',
    state: ''
  }
  id: any;

  constructor(private router: Router, private http: HttpClient, private schoolService: SchoolService) {

  }


  ngOnInit() {

  }

  createSchool(){
    if(this.school.name != "" && this.school.state != "")
      this.schoolService.create({method: "POST", name: this.school.name, state: this.school.state}).subscribe(()=>{
        this.router.navigateByUrl('/admin/school');
      });
  }

}

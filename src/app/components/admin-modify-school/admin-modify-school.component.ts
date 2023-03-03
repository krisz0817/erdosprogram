import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from 'src/app/models/school.interface';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-admin-modify-school',
  templateUrl: './admin-modify-school.component.html',
  styleUrls: ['./admin-modify-school.component.scss']
})
export class AdminModifySchoolComponent implements OnInit {

  school: School = {
    id: 0,
    name: '',
    state: ''
  }
  id: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private schoolService: SchoolService) {

  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
        this.schoolService.getById(this.id).subscribe((response)=>{
          this.school = response;
      })
      });
  }

  modifySchool(){
    if(this.school.name != "" && this.school.state != "")
      this.schoolService.update({method: "PUT", id: this.school.id, name: this.school.name, state: this.school.state}).subscribe(()=>{
        this.router.navigateByUrl('/admin/school');
      });
  }

}

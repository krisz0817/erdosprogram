import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher/teacher.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tanarok',
  templateUrl: './tanarok.component.html',
  styleUrls: ['./tanarok.component.scss']
})
export class TanarokComponent implements OnInit {
  _baseUrl2 = "";

  teachers: any;

  constructor(private http: HttpClient, private teacherService: TeacherService) {
    teacherService.getAll().subscribe((response:any)=>{
      this.teachers = response;
      this.teachers.forEach((teacher:any) => {
        if(teacher.title == null) {
          teacher.title = "";
        }
        teacher.cv = this._baseUrl2 + teacher.cv;
      });
    })
  }

  ngOnInit(): void {
  }

}

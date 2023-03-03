import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Leader } from 'src/app/models/leader.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFilesComponent } from '../upload-files/upload-files.component';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-admin-modify-teacher',
  templateUrl: './admin-modify-teacher.component.html',
  styleUrls: ['./admin-modify-teacher.component.scss']
})
export class AdminModifyTeacherComponent implements OnInit {

  @ViewChildren('cmp') components:QueryList<UploadFilesComponent>;

  leader: Leader = {
    id: 0,
    email: '',
    phone: '',
    title: '',
    firstname: '',
    lastname: '',
    cv: '',
    img: '',
    createdAt: new Date,
    updatedAt: new Date
  }
  statuses: any;
  id: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private teacherService: TeacherService) {
  }


   ngOnInit() {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
        this.teacherService.getById(this.id).subscribe((response:any)=>{
          this.leader = response;
      })
      });
   }

   modify(){
    if(this.components.toArray()[0].progressInfos.length > 0)
      this.leader.cv = "https://erdosprogram.hu:8443/api/tanar/"+this.components.toArray()[0].progressInfos[0].fileName;
    if(this.components.toArray()[1].progressInfos.length > 0)
      this.leader.img = "https://erdosprogram.hu:8443/api/tanar/profil/"+this.components.toArray()[1].progressInfos[0].fileName;
    let data = {
      method: "PUT",
      id: this.leader.id,
      email: this.leader.email,
      phone: this.leader.phone,
      title: this.leader.title,
      firstname: this.leader.firstname,
      lastname: this.leader.lastname,
      cv: this.leader.cv,
      img: this.leader.img,
      createdAt: this.leader.createdAt,
      updatedAt: this.leader.updatedAt
    }
    console.log(data);
    if(data.email!=""&&data.phone!=""&&data.cv!=""){
      this.teacherService.update(data).subscribe((response:any)=>{
        this.router.navigateByUrl('/admin/tanarok');
      })
    }
   }

}

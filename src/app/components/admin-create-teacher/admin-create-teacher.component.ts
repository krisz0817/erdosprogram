import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page/page.service';
import { ActivatedRoute } from '@angular/router'
import { TextEditorComponent } from '../text-editor/text-editor.component';
import { UploadFilesComponent } from '../upload-files/upload-files.component';
import { Teacher } from 'src/app/models/teacher.interface';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-admin-create-leader',
  templateUrl: './admin-create-teacher.component.html',
  styleUrls: ['./admin-create-teacher.component.scss']
})
export class AdminCreateTeacherComponent implements OnInit {
  @ViewChildren('cmp') components:QueryList<UploadFilesComponent>;

  teacher : Teacher = {
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
  };
  pages: any;
  id: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private teacherService: TeacherService) {  }


   ngOnInit() {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
      if(this.id != null)
        this.teacherService.getById(this.id).subscribe((response: any)=>{
          this.teacher = response;
      })
      });
   }

   createTeacher(){
    if(this.components.toArray()[0].progressInfos.length > 0)
      this.teacher.cv = "https://erdosprogram.hu:8443/api/tanar/"+this.components.toArray()[0].progressInfos[0].fileName;
    if(this.components.toArray()[1].progressInfos.length > 0)
      this.teacher.img = "https://erdosprogram.hu:8443/api/tanar/profil/"+this.components.toArray()[1].progressInfos[0].fileName;
    let data = {
      method: "POST",
      id: this.teacher.id,
      email: this.teacher.email,
      phone: this.teacher.phone,
      title: this.teacher.title,
      firstname: this.teacher.firstname,
      lastname: this.teacher.lastname,
      cv: this.teacher.cv,
      img: this.teacher.img,
      createdAt: this.teacher.createdAt,
      updatedAt: this.teacher.updatedAt
    }
    console.log(data);
    if(this.teacher.email!="" && this.teacher.firstname!=""){
      this.teacherService.create(data).subscribe((response:any)=>{
        if(response[0]>0){
          this.router.navigateByUrl('/admin/tanarok');
        }
      })
    }
   }


}

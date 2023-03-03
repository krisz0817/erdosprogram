import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UploadFilesComponent } from '../upload-files/upload-files.component';
import { UserService } from 'src/app/services/user/user.service';
import { SchoolService } from 'src/app/services/school/school.service';
import { GlobalvarsService } from 'src/app/services/globalvars/globalvars.service';
import { TeacherAuthGuard } from 'src/app/authgurads/teacher-auth-guard.guard';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  @ViewChildren('cmp') uploadFiles:QueryList<UploadFilesComponent>;

  user: User = JSON.parse(this.cookieService.get('user'));
  modifyPass: boolean = false;
  schools: any;
  applicationFileUnder16:any;
  applicationFile16:any;
  statement_file:any;
  teacherAuthGuard: TeacherAuthGuard;
  constructor(private router: Router, private userService: UserService, private schoolService: SchoolService, private globalvarService: GlobalvarsService, private cookieService: CookieService) {
    this.teacherAuthGuard = new TeacherAuthGuard(router, cookieService);
    globalvarService.getFiles().subscribe((response:any)=>{
      this.statement_file = response.find((element:any) => {
        return element.variable == "statement_file"
      }).value;
      this.applicationFileUnder16 = response.find((element:any) => {
        return element.variable == "application_file_16-"
      }).value;
      this.applicationFile16 = response.find((element:any) => {
        return element.variable == "application_file_16+"
      }).value;
    })
    schoolService.getAll().subscribe((response: any)=>{
      this.schools = response;
    })
  }

  ngOnInit(): void {
    if(this.user.role_id == 0) {
      this.router.navigate(['/']);
    }
  }

  toggleModifyPass() {
    this.modifyPass = !this.modifyPass;
  }

  modify() {
    let statement = this.uploadFiles.toArray()[0].progressInfos.length == 1 && this.uploadFiles.toArray()[0].progressInfos[0].fileName.substring(this.uploadFiles.toArray()[0].progressInfos[0].fileName.length-4);
    if(statement == ".pdf" || statement == "docx") {
      this.user.statement_file = this.uploadFiles.toArray()[0].progressInfos[0].fileName;
    }
    let application = this.uploadFiles.toArray()[1].progressInfos.length == 1 && this.uploadFiles.toArray()[1].progressInfos[0].fileName.substring(this.uploadFiles.toArray()[1].progressInfos[0].fileName.length-4);
    if(application == ".pdf" || application == "docx") {
      this.user.application_file = this.uploadFiles.toArray()[1].progressInfos[0].fileName;
    }
    if(this.user.class == null) {
      this.user.class = parseInt((document.getElementById("user_class") as HTMLInputElement).value);
    }
    if(this.user.class != null && this.user.school_id != null && this.user.teacher != null) {
      let data = {
        method: "PUT",
        id: this.user.id,
        email: this.user.email,
        password: this.user.password,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        token: this.user.token,
        role_id: this.user.role_id,
        role_name: this.user.role_name,
        status_id: this.user.status_id,
        status_name: this.user.status_name,
        school_id:this.user.school_id,
        teacher: this.user.teacher,
        class: this.user.class,
        statement_file: this.user.statement_file,
        application_file: this.user.application_file
      }
      this.userService.update(data).subscribe((response: any)=>{
        console.log(response);
      });
    }
  }

  export(){

  }

}

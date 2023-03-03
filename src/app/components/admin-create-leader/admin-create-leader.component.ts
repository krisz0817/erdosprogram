import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page/page.service';
import { ActivatedRoute } from '@angular/router'
import { TextEditorComponent } from '../text-editor/text-editor.component';
import { UploadFilesComponent } from '../upload-files/upload-files.component';
import { Leader } from 'src/app/models/leader.interface';
import { LeaderService } from 'src/app/services/leader/leader.service';

@Component({
  selector: 'app-admin-create-leader',
  templateUrl: './admin-create-leader.component.html',
  styleUrls: ['./admin-create-leader.component.scss']
})
export class AdminCreateLeaderComponent implements OnInit {
  @ViewChildren('cmp') components:QueryList<UploadFilesComponent>;

  leader : Leader = {
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
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private leaderService: LeaderService) {  }


   ngOnInit() {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
      if(this.id != null)
        this.leaderService.getById(this.id).subscribe((response: any)=>{
          this.leader = response;
      })
      });
   }

   createLeader(){
    if(this.components.toArray()[0].progressInfos.length > 0)
      this.leader.cv = "https://erdosprogram.hu:8443/api/vezeto/"+this.components.toArray()[0].progressInfos[0].fileName;
    if(this.components.toArray()[1].progressInfos.length > 0)
      this.leader.img = "https://erdosprogram.hu:8443/api/vezeto/profil/"+this.components.toArray()[1].progressInfos[0].fileName;
    let data = {
      method: "POST",
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
    if(this.leader.email!="" && this.leader.firstname!=""){
      this.leaderService.create(data).subscribe((response:any)=>{
        if(response[0]>0){
          this.router.navigateByUrl('/admin/leader');
        }
      })
    }
   }


}

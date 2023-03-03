import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { PageService } from 'src/app/services/page/page.service';
import { ActivatedRoute } from '@angular/router'
import { Article } from 'src/app/models/article.interface';
import { TextEditorComponent } from '../text-editor/text-editor.component';
import { UploadFilesComponent } from '../upload-files/upload-files.component';

@Component({
  selector: 'app-admin-modify-article',
  templateUrl: './admin-modify-article.component.html',
  styleUrls: ['./admin-modify-article.component.scss']
})
export class AdminModifyArticleComponent implements OnInit {

  @ViewChild(TextEditorComponent) textEditor:any;
  @ViewChild(UploadFilesComponent) uploadFiles:any;

  article : Article = {
    id: 0,
    title: '',
    description: '',
    page_id: 0,
    page: '',
    page_real_name: '',
    swiper: false,
    img: '',
    src: '',
    year: '',
    createdAt: new Date,
    updatedAt: new Date
  };
  pages: any;
  id: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private articleService: ArticleService, private pageService: PageService) {
    pageService.getPages().subscribe((response:any)=>{
      this.pages = response;
    })
  }


   ngOnInit() {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
        this.articleService.getById(this.id).subscribe((response)=>{
          this.article = response;
          console.log(this.article);
          this.textEditor.textEditor.content = this.article.description;
      })
      });
   }

   checkDijazott(){
    return this.article.page_id==9;
   }

   modifyArticle(){
    this.article.description = this.textEditor.textEditor.content;
    if(this.uploadFiles.progressInfos.length==1)
      this.article.img = "https://erdosprogram.hu:8443/api/images/"+this.uploadFiles.progressInfos[0].fileName;
    console.log(this.article);
    let data = {
      method: "PUT",
      article: this.article
    }
    if(this.article.page_id>0&&this.article.title!=""){
      this.articleService.update(data).subscribe((response:any)=>{
          this.router.navigateByUrl('/admin/cikkek');
      })
    }
   }


}

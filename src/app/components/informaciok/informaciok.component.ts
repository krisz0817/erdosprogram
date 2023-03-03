import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";

@Component({
  selector: 'app-informaciok',
  templateUrl: './informaciok.component.html',
  styleUrls: ['./informaciok.component.scss']
})
export class InformaciokComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) { 
    articleService.getByPage("/informaciok").subscribe((response)=>{
      this.articles = response;
    })
  }

  ngOnInit(): void {
  }

}

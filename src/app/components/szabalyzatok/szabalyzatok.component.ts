import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";

@Component({
  selector: 'app-szabalyzatok',
  templateUrl: './szabalyzatok.component.html',
  styleUrls: ['./szabalyzatok.component.scss']
})
export class SzabalyzatokComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) { 
    articleService.getByPage("/szabalyzatok").subscribe((response)=>{
      this.articles = response;
    })
  }

  ngOnInit(): void {
  }

}

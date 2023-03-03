import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";

@Component({
  selector: 'app-adomanyozas-rendje',
  templateUrl: './adomanyozas-rendje.component.html',
  styleUrls: ['./adomanyozas-rendje.component.scss']
})
export class AdomanyozasRendjeComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) { 
    articleService.getByPage("/adomanyozas_rendje").subscribe((response)=>{
      this.articles = response;
    })
  }

  ngOnInit(): void {
  }

}

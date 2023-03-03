import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";

@Component({
  selector: 'app-partnerek',
  templateUrl: './partnerek.component.html',
  styleUrls: ['./partnerek.component.scss']
})
export class PartnerekComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) { 
    articleService.getByPage("/partnerek").subscribe((response)=>{
      this.articles = response;
    })
  }

  ngOnInit(): void {
  }

}

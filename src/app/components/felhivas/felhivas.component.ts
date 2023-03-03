import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";

@Component({
  selector: 'app-felhivas',
  templateUrl: './felhivas.component.html',
  styleUrls: ['./felhivas.component.scss']
})
export class FelhivasComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) { 
    articleService.getByPage("/felhivas").subscribe((response)=>{
      this.articles = response;
    })
  }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-tamogatok',
  templateUrl: './tamogatok.component.html',
  styleUrls: ['./tamogatok.component.scss']
})
export class TamogatokComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) {
    articleService.getByPage("/tamogatok").subscribe((response)=>{
      this.articles = response;
    })
  }

  ngOnInit(): void {
  }

}

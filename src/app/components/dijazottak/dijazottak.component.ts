import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dijazottak',
  templateUrl: './dijazottak.component.html',
  styleUrls: ['./dijazottak.component.scss']
})
export class DijazottakComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) {
    articleService.getByPage("/polya_gyorgy_dij").subscribe((response)=>{
      this.articles = response.reverse();
      this.articles.forEach((article: any) => {
          const datepipe: DatePipe = new DatePipe('en-US')
          article.updatedAt = datepipe.transform(article.updatedAt, 'YYYY. MM. dd.')
      });
    })
  }

  ngOnInit(): void {
  }

}

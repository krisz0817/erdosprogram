import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rolunk-irtak',
  templateUrl: './rolunk-irtak.component.html',
  styleUrls: ['./rolunk-irtak.component.scss']
})
export class RolunkIrtakComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) {
    articleService.getByPage("/rolunk_irtak").subscribe((response)=>{
      this.articles = response;
      const datepipe: DatePipe = new DatePipe('en-US');
      this.articles.forEach((article:any) => {
        article.updatedAt = datepipe.transform(article.updatedAt, 'YYYY. MM. dd.')
      });
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";

@Component({
  selector: 'app-a-program-celja',
  templateUrl: './a-program-celja.component.html',
  styleUrls: ['./a-program-celja.component.scss']
})
export class AProgramCeljaComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) {
    articleService.getByPage("/a_program_celja").subscribe((response)=>{
      this.articles = response;
    })
  }

  ngOnInit(): void {
  }

}

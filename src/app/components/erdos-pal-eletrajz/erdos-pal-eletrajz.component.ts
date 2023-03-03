import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";

@Component({
  selector: 'app-erdos-pal-eletrajz',
  templateUrl: './erdos-pal-eletrajz.component.html',
  styleUrls: ['./erdos-pal-eletrajz.component.scss']
})
export class ErdosPalEletrajzComponent implements OnInit {

  articles: any;

  constructor(private http: HttpClient, private articleService: ArticleService) { 
    articleService.getByPage("/erdos_pal_eletrajz").subscribe((response)=>{
      this.articles = response;
    })
  }

  ngOnInit(): void {
  }

}

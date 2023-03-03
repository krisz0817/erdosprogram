import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.interface';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private http : HttpClientModule, private articleService: ArticleService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      this.id = params['id'];
      if(this.id != null)
        this.articleService.getById(this.id).subscribe((response)=>{
          this.article = response;
          const datepipe: DatePipe = new DatePipe('en-US')
          this.article.updatedAt = datepipe.transform(this.article.updatedAt, 'YYYY. MM. dd.')
      })
      });
  }

}

import { AfterViewChecked, Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ArticleService } from "src/app/services/article/article.service";
import { DatePipe } from '@angular/common';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  carousel:any;
  current = 0;
  move_right = document.getElementById('moveRight');
  move_left = document.getElementById('moveLeft');
  next: any;
  prev: any;

  articles: any;
  swiperArticles: any;

  constructor(private http: HttpClient, private articleService: ArticleService, private cookieService: CookieService) {
    articleService.getByPage("/").subscribe((response)=>{
      this.articles = response.reverse();
    })
    articleService.getSwipers().subscribe((response)=>{
      this.swiperArticles = response.slice(0, Math.min(response.length, 4));
      const datepipe: DatePipe = new DatePipe('en-US')
      this.swiperArticles.forEach((article:any) => {
        article.updatedAt = datepipe.transform(article.updatedAt, 'YYYY. MM. dd.')
      });
    })
  }
  ngAfterViewChecked(){
    this.carouselWorks();
  }

  ngOnInit() {
  }

  carouselWorks() {
    this.carousel = document.getElementsByClassName('carousel-item');
    this.carousel.item(0)?.classList.add('active');
  }

  setSlide(prev: any, next: any) {
    let slide = this.current;
    if(next > this.carousel.length - 1) {
      slide = 0;
      this.current = 0;
    }

    if(next < 0) {
      slide = this.carousel.length - 1;
      this.current = this.carousel.length - 1;
    }
    this.carousel.item(prev)?.classList.remove('active');
    this.carousel.item(slide)?.classList.add('active');
  }

  nextSlide() {
    let next = this.current;
    this.current = this.current + 1;
    this.setSlide(next, this.current);
  }

  prevSlide() {
    let prev = this.current;
    this.current = this.current - 1;
    this.setSlide(prev, this.current);
  }
}


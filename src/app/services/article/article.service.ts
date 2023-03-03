import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/models/article.interface';
import { Observable } from 'rxjs';
import { BASE_SERVER } from '..';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private REST_API_SERVER = BASE_SERVER+"/api/article";

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(this.REST_API_SERVER);
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${this.REST_API_SERVER}/?id=${id}`);
  }
  getByPage(page_name: string): Observable<any> {
    return this.http.get(`${this.REST_API_SERVER}/?page_name=${page_name}`);
  }
  getSwipers(): Observable<any> {
    return this.http.get(`${this.REST_API_SERVER}/?swiper`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER, data);
  }
  update(data: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, data);
  }
  delete(data: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, data);
  }
}

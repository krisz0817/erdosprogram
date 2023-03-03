import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BASE_SERVER } from '..';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private REST_API_SERVER = BASE_SERVER+"/api/gallery";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.REST_API_SERVER);
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${this.REST_API_SERVER}/?id=${id}`);
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

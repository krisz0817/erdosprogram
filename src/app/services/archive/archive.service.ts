import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Archive } from 'src/app/models/archive.interface';
import { Observable } from 'rxjs/internal/Observable';
import { BASE_SERVER } from '..';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private REST_API_SERVER = BASE_SERVER+"/api/archive";

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(this.REST_API_SERVER);
  }
  activate(data: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, data);
  }
  delete(data: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, data);
  }
}

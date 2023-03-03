import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarsService {

   private REST_API_SERVER = "https://erdosprogram.hu:8443/api/";

  constructor(private http: HttpClient) { }

  getAllVariable(): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"globalvars", {method: "SELECTALL"});
  }

  getContacts(): Observable<any> {
    return this.http.get(this.REST_API_SERVER+"contacts");
  }

  getFiles(): Observable<any> {
    return this.http.get(this.REST_API_SERVER+"reqfiles");
  }

  update(data: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER+"globalvars"}`, data);
  }
}

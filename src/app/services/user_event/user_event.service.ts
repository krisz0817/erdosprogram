import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BASE_SERVER } from '..';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  private REST_API_SERVER = BASE_SERVER+"/api/userevent";

  constructor(private http: HttpClient) { }

  getEvent(id: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, {method: "GETEVENT", event_id: id});
  }
  getOne(id: any, event_id: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, {method: "GETONE", user_id: id, event_id: event_id});
  }
  create(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER, data);
  }
  update(data: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, data);
  }
  delete(user_id: any, event_id: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, {method: "DELETE", user_id: user_id, event_id: event_id});
  }
  activate(user_id: any, event_id: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, {method: "ACTIVATE", user_id: user_id, event_id: event_id});
  }
  deactivate(user_id: any, event_id: any): Observable<any> {
    return this.http.post(`${this.REST_API_SERVER}`, {method: "DEACTIVATE", user_id: user_id, event_id: event_id});
  }
}

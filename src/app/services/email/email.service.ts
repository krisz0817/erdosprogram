import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BASE_SERVER } from '..';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private REST_API_SERVER = BASE_SERVER+"/api/send";

  constructor(private http: HttpClient) { }
  sendRegistrationEmail(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"/reg", data);
  }

  sendActivation(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"/activation", data);
  }

  sendDeactivation(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"/deactivation", data);
  }

  sendEventApplication(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"/application", data);
  }

  sendEventAccept(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"/accept", data);
  }

  sendEventDisable(data: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"/disable", data);
  }

  sendGroupMail(email: any, text: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"/group", {email: email, text: text});
  }
  sendMail(email: any, text: any, filename: any): Observable<any> {
    return this.http.post(this.REST_API_SERVER+"/mail", {email: email, text: text, filename: filename});
  }
}

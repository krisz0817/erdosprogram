import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_SERVER } from '..';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private REST_API_SERVER = BASE_SERVER+"/api/page";

  constructor(private httpClient: HttpClient) { }

  public getPages(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}

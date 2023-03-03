import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_SERVER } from '..';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private REST_API_SERVER = BASE_SERVER+"/api/status";

  constructor(private httpClient: HttpClient) { }

  public getStatuses(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}

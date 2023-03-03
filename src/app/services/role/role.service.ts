import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_SERVER } from '..';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private REST_API_SERVER = BASE_SERVER+"/api/role";

  constructor(private httpClient: HttpClient) { }

  public getRoles(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}

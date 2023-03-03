import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  user;

  constructor(private router: Router, private cookieservice: CookieService){
    this.user = JSON.parse(this.cookieservice.get('user'));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.user.role_id==1 && this.user.status_id==2){
        return true;
      }else{
        this.router.navigate(["/"])
        return false;
      }
  }

}

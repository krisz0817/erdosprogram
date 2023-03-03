import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinAuthGuard implements CanActivate{
  user;

  constructor(private router: Router, private cookieservice: CookieService){
    this.user = JSON.parse(this.cookieservice.get('user'));
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.user.role_id == 3 && this.user.status_id==2 && (this.user.application_file!=null && this.user.application_file!="") && (this.user.statement_file!=null && this.user.statement_file!="")){
        return true;
      }else{
        if(this.user.role_id != 3 || this.user.status_id!=2){
          this.router.navigate(["/login"])
        }else{
          console.log("Files", this.user);
          if(this.user.application_file==null || this.user.application_file=="" || this.user.statement_file==null || this.user.statement_file==""){
            this.router.navigate(["/user-profil"])
          }
        }
        return false;
      }
  }

  canActivate2(){
    if(this.user.role_id == 3 && this.user.status_id==2 && (this.user.application_file!=null && this.user.application_file!="") && (this.user.statement_file!=null && this.user.statement_file!="")){
      return true;
    }else{
      if(this.user.role_id != 3 || this.user.status_id!=2){
        this.router.navigate(["/login"])
      }else{
        console.log("Files", this.user);
        if(this.user.application_file==null || this.user.application_file=="" || this.user.statement_file==null || this.user.statement_file==""){
          this.router.navigate(["/user-profil"])
        }
      }
      return false;
    }
  }

}

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'erdosprogram';
  user: User = {
    id: 0,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    token: '',
    role_id: 0,
    role_name: '',
    status_id: 0,
    status_name: '',
    school_id: 0,
    teacher: '',
    class: 0,
    statement_file: '',
    application_file: '',
    createdAt: new Date,
    updatedAt: new Date
  }

  constructor(private cookieService: CookieService) {
    if(!cookieService.check('user') || cookieService.get('user') == "") {
      cookieService.set('user', JSON.stringify(this.user));
    }

  }
}


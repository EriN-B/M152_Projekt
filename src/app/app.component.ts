import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {PageService} from "./services/page.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M152';
  public cookie_name='';
  public all_cookies:any='';

  constructor(private cookieService:CookieService, public pageService: PageService) {
  }

  setCookie(){
    this.cookieService.set('FirstEntering','false');
  }

  deleteCookie(){
    this.cookieService.delete('FirstEntering');
  }

  deleteAll(){
    this.cookieService.deleteAll();
  }
}

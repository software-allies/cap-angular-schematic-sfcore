import { Injectable , Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class SalesforceService {

  private cookiesIndex: string = 'logged_in';
  constructor(private cookieService: CookieService) { }

  isUserLoggedIn(): boolean {
    let status = this.cookieService.check(this.cookiesIndex);
    return status;
  }
}

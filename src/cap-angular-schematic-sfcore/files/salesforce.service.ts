import { Injectable , Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class SalesforceService {
  url: string;
  limit: number;
  constructor(@Inject(PLATFORM_ID) private platformId) {}


  isUserLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId) && localStorage.getItem('User')) {
      let userStorage = JSON.parse(localStorage.getItem('User'));
      const helper = new JwtHelperService();
      if (!helper.isTokenExpired(userStorage.token)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

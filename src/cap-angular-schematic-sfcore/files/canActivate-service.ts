import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SalesforceService } from './salesforce.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private salesforceService: SalesforceService
  ) {}

  canActivate() {
    if (this.salesforceService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}

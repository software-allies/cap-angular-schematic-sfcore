import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoopbackService } from './loopback.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private loopbackService: LoopbackService
  ) {}

  canActivate() {
    if (this.loopbackService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}

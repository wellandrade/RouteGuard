import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate():  Observable<boolean | UrlTree>  {
    return this.auth
      .isLoggedIn()
      .pipe(map(isLoggedIn => isLoggedIn || this.router.createUrlTree([''])));
  }
}

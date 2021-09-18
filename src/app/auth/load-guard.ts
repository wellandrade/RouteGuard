import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {

  constructor(private auth: AuthService) { }

  canLoad(route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isLoggedIn();
  }
}

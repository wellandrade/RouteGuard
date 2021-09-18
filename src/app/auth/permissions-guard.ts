import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivateChild {

  constructor(private auth: AuthService) { }

  canActivateChild(): Observable<boolean> {
    return this.auth.hasPermissions();
  }

}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConfirmDialogComponent } from '../admin/confirm-dialog/confirm-dialog.component';
import { SafeData } from '../interfaces/safe-data.interface';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<SafeData> {

  constructor(private dialog: MatDialog) { }

  canDeactivate(component: SafeData): Observable<boolean> {

    if (component.isDataSaved()) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);

      return dialogRef.afterClosed();
    }
    return of(true);
  }
}

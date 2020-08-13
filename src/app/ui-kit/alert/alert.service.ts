import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { YesNoDialogComponent } from './yes-no/yes-no-dialog.component';

@Injectable()
export class AlertService {

  constructor(
    private dialog: MatDialog
  ) { }

  alert(title: string, content: string) {
    this.dialog.open(AlertDialogComponent, {
      width: '570px',
      data: {
        title,
        content
      }
    });
  }

  confirmDelete(): Observable<boolean> {
    const dialog = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '370px',
    });
    return dialog.afterClosed();
  }

  yesNo(title: string, content: string): Observable<boolean> {
    const dialog = this.dialog.open(YesNoDialogComponent, {
      width: '370px',
      data: { title, content }
    });
    return dialog.afterClosed();
  }
}

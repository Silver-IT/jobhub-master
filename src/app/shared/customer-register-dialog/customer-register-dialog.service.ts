import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CustomerRegisterDialogComponent } from './customer-register-dialog.component';

@Injectable()
export class CustomerRegisterDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(CustomerRegisterDialogComponent, {
      width: '570px'
    });
  }
}

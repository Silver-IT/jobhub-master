import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { AlertService } from './alert.service';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { YesNoDialogComponent } from './yes-no/yes-no-dialog.component';

@NgModule({
  declarations: [
    AlertDialogComponent,
    DeleteConfirmDialogComponent,
    YesNoDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders<AlertModule> {
    return {
      ngModule: AlertModule,
      providers: [ AlertService ]
    };
  }
}

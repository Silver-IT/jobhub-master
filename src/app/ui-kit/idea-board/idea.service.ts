import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { IdeaUploadDialogComponent } from './idea-upload-dialog/idea-upload-dialog.component';
import { Idea } from '../../core/models/idea-board';
import { IdeaSetCategoryDialogComponent } from './idea-set-category-dialog/idea-set-category-dialog.component';

@Injectable()
export class IdeaService {

  constructor(
    private dialog: MatDialog
  ) { }

  upload() {
    const dialogRef = this.dialog.open(IdeaUploadDialogComponent, {
      width: '770px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(value => {
      if (value && value.length) {
        this.openAssignDialog(value);
      } else {

      }
    });
  }

  openAssignDialog(files: string[], idea?: Idea): MatDialogRef<any> {
    return this.dialog.open(IdeaSetCategoryDialogComponent, {
      width: '570px',
      disableClose: true,
      data: {files, idea}
    });
  }
}

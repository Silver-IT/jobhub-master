import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImagePreviewDialogComponent } from './image-preview-dialog.component';

@Injectable()
export class ImagePreviewDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openImagePreviewDialog(image: string) {
    this.dialog.open(ImagePreviewDialogComponent, {
      width: '965px',
      panelClass: 'bg-black',
      data: { image }
    });
  }
}

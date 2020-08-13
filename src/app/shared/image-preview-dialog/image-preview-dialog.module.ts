import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { ImagePreviewDialogComponent } from './image-preview-dialog.component';
import { ImagePreviewDialogService } from './image-preview-dialog.service';

@NgModule({
  declarations: [
    ImagePreviewDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    CommonUiKitModule
  ],
  providers: [
    ImagePreviewDialogService
  ]
})
export class ImagePreviewDialogModule {
  static forRoot(): ModuleWithProviders<ImagePreviewDialogModule> {
    return {
      ngModule: ImagePreviewDialogModule,
      providers: [ ImagePreviewDialogService ]
    };
  }
}

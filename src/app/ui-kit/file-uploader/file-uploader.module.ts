import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUploaderModule } from 'ngx-uploader';
import { NgProgressModule } from 'ngx-progressbar';

import { IconModule } from '../icon/icon.module';
import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';
import { ImagePreviewDialogModule } from '../../shared/image-preview-dialog/image-preview-dialog.module';

import { CvUploaderComponent } from './cv-uploader/cv-uploader.component';
import { PhotoUploaderComponent } from './photo-uploader/photo-uploader.component';
import { AvatarUploaderComponent } from './avatar-uploader/avatar-uploader.component';
import { DragUploaderComponent } from './drag-uploader/drag-uploader.component';

@NgModule({
  declarations: [
    CvUploaderComponent,
    PhotoUploaderComponent,
    AvatarUploaderComponent,
    DragUploaderComponent
  ],
  imports: [
    CommonModule,
    NgProgressModule,
    NgxUploaderModule,
    IconModule,
    CommonUiKitModule,
    ImagePreviewDialogModule.forRoot()
  ],
  exports: [
    CvUploaderComponent,
    PhotoUploaderComponent,
    AvatarUploaderComponent,
    DragUploaderComponent
  ]
})
export class FileUploaderModule {
}

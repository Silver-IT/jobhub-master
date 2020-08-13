import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { AvatarModule } from '../../../ui-kit/avatar/avatar.module';
import { FileUploaderModule } from '../../../ui-kit/file-uploader/file-uploader.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';

import { NetworkDetailRoutingModule } from './network-detail-routing.module';
import { NetworkDetailComponent } from './network-detail.component';

@NgModule({
  declarations: [NetworkDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NetworkDetailRoutingModule,
    CommonUiKitModule,
    InputModule,
    AvatarModule,
    FileUploaderModule,
    AlertModule.forRoot()
  ]
})
export class NetworkDetailModule { }

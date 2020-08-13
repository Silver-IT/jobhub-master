import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';

import { PrivacyRoutingModule } from './privacy-routing.module';

import { PrivacyComponent } from './privacy.component';
import { PrivacyContentComponent } from './privacy-content/privacy-content.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PrivacyComponent, PrivacyContentComponent, PrivacyDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    PrivacyRoutingModule,
    PageBuilderKitModule,
  ]
})
export class PrivacyModule {
}

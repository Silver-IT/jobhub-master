import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';

import { LegalNoticeRoutingModule } from './legal-notice-routing.module';

import { LegalNoticeComponent } from './legal-notice.component';
import { LegalNoticeContentComponent } from './legal-notice-content/legal-notice-content.component';
import { LegalNoticeDialogComponent } from './legal-notice-dialog/legal-notice-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LegalNoticeComponent,
    LegalNoticeContentComponent,
    LegalNoticeDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    LegalNoticeRoutingModule,
    PageBuilderKitModule,
  ]
})
export class LegalNoticeModule {
}

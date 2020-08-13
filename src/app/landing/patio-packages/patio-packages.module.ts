import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { PageBuilderKitModule } from '../../ui-kit/page-builder-kit/page-builder-kit.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { MapModule } from '../../ui-kit/map/map.module';
import { AlertModule } from '../../ui-kit/alert/alert.module';
import { SchedulerModule } from '../../ui-kit/scheduler/scheduler.module';

import { PatioPackagesRoutingModule } from './patio-packages-routing.module';
import { PatioPackagesComponent } from './patio-packages.component';
import { PackageCardComponent } from './package-card/package-card.component';
import { PackageContentComponent } from './package-content/package-content.component';
import { PackageImageViewerComponent } from './package-image-viewer/package-image-viewer.component';
import { PatioPackageRegisterDialogComponent } from './patio-package-register-dialog/patio-package-register-dialog.component';

@NgModule({
  declarations: [
    PatioPackagesComponent,
    PackageCardComponent,
    PackageContentComponent,
    PackageImageViewerComponent,
    PatioPackageRegisterDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule,
    ScrollToModule.forRoot(),
    PatioPackagesRoutingModule,
    PageBuilderKitModule,
    CommonUiKitModule,
    InputModule,
    PipesModule,
    MapModule.forRoot(),
    AlertModule.forRoot(),
    SchedulerModule.forRoot()
  ]
})
export class PatioPackagesModule { }

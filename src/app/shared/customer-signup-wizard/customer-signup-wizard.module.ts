import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { InputModule } from '../../ui-kit/input/input.module';
import { FileUploaderModule } from '../../ui-kit/file-uploader/file-uploader.module';
import { IdeaBoardModule } from '../../ui-kit/idea-board/idea-board.module';
import { IconModule } from '../../ui-kit/icon/icon.module';
import { InformationTooltipModule } from '../../ui-kit/information-tooltip/information-tooltip.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { MapModule } from '../../ui-kit/map/map.module';
import { SchedulerModule } from '../../ui-kit/scheduler/scheduler.module';

import { ProjectGeneralComponent } from './project-general/project-general.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { CompleteAccountComponent } from './complete-account/complete-account.component';
import { IdeaSelectComponent } from './idea-select/idea-select.component';

@NgModule({
  declarations: [
    ProjectGeneralComponent,
    PersonalDetailComponent,
    CompleteAccountComponent,
    IdeaSelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    InputModule,
    PipesModule,
    FileUploaderModule,
    IconModule,
    IdeaBoardModule,
    InformationTooltipModule,
    MapModule.forRoot(),
    SchedulerModule.forRoot()
  ],
  exports: [
    ProjectGeneralComponent,
    PersonalDetailComponent,
    CompleteAccountComponent,
    IdeaSelectComponent
  ]
})
export class CustomerSignupWizardModule {
}

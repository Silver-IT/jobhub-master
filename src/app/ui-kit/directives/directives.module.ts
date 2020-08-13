import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IfRolesDirective } from './if-roles.directive';
import { IfAssignedContractorDirective } from './if-assigned-contractor.directive';

@NgModule({
  declarations: [
    IfRolesDirective,
    IfAssignedContractorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IfRolesDirective,
    IfAssignedContractorDirective
  ]
})
export class DirectivesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../../ui-kit/input/input.module';
import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { AlertModule } from '../../../ui-kit/alert/alert.module';

import { CategoryDetailRoutingModule } from './category-detail-routing.module';
import { CategoryDetailComponent } from './category-detail.component';

@NgModule({
  declarations: [CategoryDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryDetailRoutingModule,
    InputModule,
    CommonUiKitModule,
    AlertModule.forRoot()
  ]
})
export class CategoryDetailModule { }

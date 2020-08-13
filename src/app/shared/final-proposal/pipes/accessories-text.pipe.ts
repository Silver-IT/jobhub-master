import { Pipe, PipeTransform } from '@angular/core';

import { ProjectAccessoryType } from '../../../core/models/project';
import { SeparatorType } from '../../../core/models/base';
import { concatAccessoryTypeNames } from '../../../core/utils/project.util';

@Pipe({
  name: 'accessoriesText'
})
export class AccessoriesTextPipe implements PipeTransform {

  transform(accessories: ProjectAccessoryType[], separator: SeparatorType): string {
    return concatAccessoryTypeNames(accessories, separator);
  }
}

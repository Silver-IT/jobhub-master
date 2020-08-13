import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '../../core/models/option';
import { enumToLabel } from '../../core/utils/enum.util';

@Pipe({
  name: 'optionLabel'
})
export class OptionLabelPipe implements PipeTransform {

  transform(value: any | any[], options?: Option<any>[], multi?: boolean): string {
    if (!multi) {
      if (!options) {
        return enumToLabel(value);
      }
      const found = options.find(x => x.value === value);
      return found ? found.label : enumToLabel(value);
    } else {
      if (!value) {
        return '';
      }
      const res = value.map(val => {
        const found = options.find(x => x.value === val);
        return found ? found.label : enumToLabel(val);
      });
      return res.join(', ');
    }
  }

}

import * as pluralize from 'pluralize';

import { ProjectAccessoryType, projectAccessoryTypeLabels } from '../models/project';
import { enumToLabel } from './enum.util';
import { SeparatorType } from '../models/base';

export function concatAccessoryTypeNames(accessories: ProjectAccessoryType[], separator: SeparatorType): string {
  accessories = accessories.filter(a => a);
  const countsByType = accessories.reduce((res, a) => {
    res[a] = res[a] ? res[a] + 1 : 1;
    return res;
  }, {});
  const keys = Object.keys(countsByType);
  const iOther = keys.findIndex(k => k === ProjectAccessoryType.Other);
  if (iOther >= 0) {
    keys.splice(iOther, 1);
    keys.push(ProjectAccessoryType.Other);
  }
  const result = keys.reduce((r, key) => [...r, pluralize(enumToLabel(key, projectAccessoryTypeLabels), countsByType[key])], []);
  const keyCount = result.length;
  if (separator === SeparatorType.Comma) {
    return keyCount === 1 ?
      result[0] :
      `${result.slice(0, keyCount - 1).join(', ')} and ${result[keyCount - 1]}`;
  } else if (separator === SeparatorType.Slash) {
    return result.join(' / ');
  }
}

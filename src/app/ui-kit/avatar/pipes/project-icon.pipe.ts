import { Pipe, PipeTransform } from '@angular/core';
import { ProjectAccessoryType } from '../../../core/models/project';

@Pipe({
  name: 'projectIcon'
})
export class ProjectIconPipe implements PipeTransform {

  transform(value: ProjectAccessoryType): string {
    const url = 'assets/images/icons/request-type/';
    switch (value) {
      case ProjectAccessoryType.DrivewayParking:
        return url + 'driveway.svg';
      case ProjectAccessoryType.RetainingWall: case ProjectAccessoryType.SittingWall:
        return url + 'wall.svg';
      case ProjectAccessoryType.Patio:
        return url + 'patio.svg';
      case ProjectAccessoryType.Walkway:
        return url + 'walkway.svg';
      case ProjectAccessoryType.PoolPatio:
        return url + 'pool.svg';
      default:
        return url + 'other.svg';
    }
  }

}

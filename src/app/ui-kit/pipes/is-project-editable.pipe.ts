import { Pipe, PipeTransform } from '@angular/core';

import { Project, ProjectDetail } from '../../core/models/project';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models/auth';

@Pipe({
  name: 'isProjectEditable'
})
export class IsProjectEditablePipe implements PipeTransform {

  constructor(
    private authService: AuthService
  ) {
  }

  transform(project: ProjectDetail | Project, ignoreSuperAdmin?: boolean): boolean {
    const user = this.authService.user;
    let flag = false;
    if (project.assignedContractor) {
      flag = project.assignedContractor.id === user.id;
    } else {
      flag = false;
    }
    if (!ignoreSuperAdmin && user.role === UserRole.SuperAdmin) {
      flag = true;
    }
    return flag;
  }

}

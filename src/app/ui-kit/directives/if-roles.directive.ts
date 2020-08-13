import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { UserRole } from '../../core/models/auth';
import { AuthService } from '../../core/services/auth.service';

@Directive({
  selector: '[jobHubIfRoles]'
})
export class IfRolesDirective {

  roles: UserRole[];

  @Input() set jobHubIfRoles(roles: UserRole[]) {
    this.roles = roles;
    this.checkRole();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  private checkRole() {
    const user = this.authService.user;
    if (!user) {
      return;
    }
    this.viewContainer.clear();
    if (!this.roles) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      if (this.roles.indexOf(user.role) > -1) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }

}

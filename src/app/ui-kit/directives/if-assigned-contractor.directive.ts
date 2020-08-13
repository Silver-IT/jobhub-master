import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { UserRole } from '../../core/models/auth';

@Directive({
  selector: '[jobHubIfAssignedContractor]'
})
export class IfAssignedContractorDirective {

  id: string;

  @Input() set jobHubIfAssignedContractor(id: string) {
    this.id = id;
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
    if (user.role === UserRole.SuperAdmin) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (user.role === UserRole.Contractor && user.id === this.id) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}

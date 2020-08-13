import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { AlertService } from '../../../ui-kit/alert/alert.service';
import { User } from '../../../core/models/auth';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';
import { ToastrService } from '../../../core/services/toastr.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'job-hub-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, OnDestroy {

  users: User[] = this.route.snapshot.data.users;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private alert: AlertService,
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  addNewUser() {
    this.openEditModal(null);
  }

  openEditModal(user: User) {
    this.dialog.open(UserFormDialogComponent, {
      width: '460px',
      data: user
    }).afterClosed().pipe(
      takeUntil(this.unsubscribeAll),
    ).subscribe((res: User) => {
      if (user && user.id) {
        user.role = res.role;
      } else {
        this.users.push(res);
      }
    });
  }

  askToDelete(user: User) {
    this.alert.confirmDelete().pipe(
      takeUntil(this.unsubscribeAll),
      filter(value => value)
    ).subscribe(async () => {
      try {
        this.isLoading = true;
        await this.userService.remove(user.id).toPromise();
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
      } catch (e) {
        this.toastr.error(e, 'Unable to delete the user. Please try again.');
      } finally {
        this.isLoading = false;
      }
    });
  }

}

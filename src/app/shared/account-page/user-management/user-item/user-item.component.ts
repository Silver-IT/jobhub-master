import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../core/models/auth';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'job-hub-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;
  @Output() edit: EventEmitter<User> = new EventEmitter<User>();
  @Output() delete: EventEmitter<User> = new EventEmitter<User>();

  me = this.authService.user;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }



}

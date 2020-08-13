import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from '../../../../core/models/auth';

@Component({
  selector: 'job-hub-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Input() user: User;

  @Output() changeEmail = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}

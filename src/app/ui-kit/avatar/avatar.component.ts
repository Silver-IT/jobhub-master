import { Component, Input, OnInit } from '@angular/core';
import { ProjectAccessoryType } from '../../core/models/project';

@Component({
  selector: 'job-hub-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() size = 42;
  @Input() src;
  @Input() type: ProjectAccessoryType;
  @Input() initials: string;

  constructor() { }

  ngOnInit(): void {
  }

}

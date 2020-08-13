import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../core/data/posts';

@Component({
  selector: 'job-hub-post-item-card',
  templateUrl: './post-item-card.component.html',
  styleUrls: ['./post-item-card.component.scss']
})
export class PostItemCardComponent implements OnInit {

  @Input() data: Post;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';

import { posts, Post } from '../data/posts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getRecentPosts(): Post[] {
    return posts;
  }
}

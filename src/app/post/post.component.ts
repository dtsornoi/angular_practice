import {Component, Input, OnInit} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {Post} from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [
    './post.component.css',
    '../app.component.css'
  ]
})
export class PostComponent implements OnInit {
  posts: Post[];
  postHeading: string;
  postMessage: string;
  constructor() {
    this.posts = [
      new Post(uuid(), 'My first Post', 'This is my first Post')];
  }

  ngOnInit(): void {
  }


  save() {
    this.posts.push(new Post(uuid(), this.postHeading, this.postMessage));
  }

  delete(id) {
    this.posts = this.posts.filter((post: Post) => post.id !== id);
  }

  update(post: Post) {

    this.posts.map((item: Post) => {
      if (post.id === item.id){
        post.isActive = !post.isActive;
        let newPost = new Post(post.id, post.heading, post.message);
        item = newPost;
        return;
      }
    })


  }
}

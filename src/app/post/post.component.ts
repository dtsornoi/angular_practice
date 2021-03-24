import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [
    './post.component.css',
    '../app.component.css'
  ]
})
export class PostComponent implements OnInit {
  posts;
  constructor() {
    this.posts = [{
      heading: 'My first Post',
      message: 'This is my first Post'
    }];
  }

  ngOnInit(): void {
  }


  save(heading, message) {
    this.posts.push({
      heading: heading,
      message: message
    });
  }
}

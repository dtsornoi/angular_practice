import { Component, OnInit } from '@angular/core';


interface Post {
  id: number;
  heading: string;
  message: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [
    './post.component.css',
    '../app.component.css'
  ]
})
export class PostComponent implements OnInit {
  posts: { heading: string; id: number; message: string }[];
  index: number = 0;
  constructor() {
    this.posts = [{
      id: this.index,
      heading: 'My first Post',
      message: 'This is my first Post'
    }];
  }

  ngOnInit(): void {
  }


  save(heading, message) {
    this.index++;
    this.posts.push({
      id: this.index,
      heading: heading,
      message: message
    });
  }

  delete(id) {
    this.posts.splice(id, 1);
    this.index--;
  }
}

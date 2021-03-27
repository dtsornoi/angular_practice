import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../model/post';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: [
    './update.component.css',
    '../app.component.css',
    '../post/post.component.css'

  ]
})
export class UpdateComponent implements OnInit {
  @Input() post;
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

}

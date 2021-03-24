import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: [
    './subscribe.component.css',
    '../app.component.css'
  ]
})
export class SubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(subscribeForm: NgForm) {
    let username = subscribeForm.value.username;

    alert('User with ' + username + ' would be created, but unfortunately this feature is not working.');
  }
}

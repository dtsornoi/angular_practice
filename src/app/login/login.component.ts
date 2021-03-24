import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../app.component.css'
  ]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(loginForm: NgForm) {
    if (loginForm.value.username.toLowerCase().trim() === "admin"
      && loginForm.value.password.toLowerCase().trim() === "admin"){
      this.router.navigate(['dashboard']);
    }
  }
}

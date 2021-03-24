import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css',
    '../app.component.css'
  ]
})
export class DashboardComponent implements OnInit {
  navItems: string[] = ['item1', 'item2', 'item3'];

  constructor() { }

  ngOnInit(): void {
  }

}

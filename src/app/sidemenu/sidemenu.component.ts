import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: [
    './sidemenu.component.css',
    '../app.component.css'
  ]
})
export class SidemenuComponent implements OnInit {
  @Input() navItems: string [];
  isActive;
  constructor() { }

  ngOnInit(): void {
  }

  setIsActiveValue($event: boolean) {
    this.isActive = $event;
  }
}

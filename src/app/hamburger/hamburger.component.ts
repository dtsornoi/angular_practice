import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
  animations: [
    trigger('hamburgerX', [
      state('hamburger', style({})),
      state('topX', style({
        transform: 'rotate(45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class HamburgerComponent implements OnInit {
  @Output() onHamburger = new EventEmitter<boolean>();
  isHamburger = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onHamburger.emit(this.isHamburger = !this.isHamburger);
  }
}

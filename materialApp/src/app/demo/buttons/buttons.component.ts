import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <button mat-button>Click me!</button>
  <mat-icon>face</mat-icon>
  <mat-checkbox>Check me!</mat-checkbox>
  `,
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

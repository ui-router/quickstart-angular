import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  template: `
    <p>
      world works!
    </p>
    <ui-view></ui-view>
  `,
  styles: []
})
export class WorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

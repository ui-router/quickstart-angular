import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>
      hello works!
    </p>
  `,
  styles: []
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

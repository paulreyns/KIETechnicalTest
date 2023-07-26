// import required packages
import 'zone.js';
import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// describe component
@Component({
  selector: 'add-one-button', // component name used in markup
  standalone: true, // component is self-contained
  // the component's markup
  template: `
   <button (click)="count = count + 1">Add one</button> {{ count }}
  `,
})

// export component
export class AddOneButtonComponent implements OnInit {
  count = 0;

  ngOnInit(): void {
    this.count = 10;
  }
}

bootstrapApplication(AddOneButtonComponent);

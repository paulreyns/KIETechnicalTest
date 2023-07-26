// import required packages
import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

// describe component
@Component({
  selector: 'application', // component name used in markup
  standalone: true, // component is self-contained
  // the component's markup
  template: `
  <div>
    <h1>Project</h1>
  </div>
  `,
})

// export component
export class AppComponent {
  project: any = {};
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
});

// import required packages
import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// describe component
@Component({
  selector: 'application', // component name used in markup
  standalone: true, // component is self-contained
  imports: [CommonModule],
  // the component's markup
  template: `
  <div>
    <h1>Project</h1>
  </div>
  `,
})

export class AppComponent {
  project: Project = null;

  // 1. Add an function that is called when the Component is initialised

  // 2. In the Init function, make a Http Call to 'https://raw.githubusercontent.com/paulreyns/KIETechnicalTest/main/Project.json' to fetch a Project

  // 3. Display the Project Name under the Title in the Template

  // 4. Display the Tasks for the Project in a HTML Table

  // (Bonus) 5. Only display Tasks that have a Start and End Date

  // (Bonus) 6. Format the Dates to display dd/mm/yyyy
}

class Project {
  public name: string;
  public tasks: Task[];
}

class Task {
  public name: string;
  public start?: Date;
  public end?: Date;
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app-2';
  users = [
    {
      name: 'ivan',
      age: 23
    },
    {
      name: 'ivan',
      age: 23
    }
  ]
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    {
      firstName: 'Stafen',
      lastName: 'Ivanov'
    },
    {
      firstName: 'Georgi',
      lastName: 'Petrov'
    }
  ];

  showLastName: boolean = true;
  constructor() { }


  nameHandler(event : MouseEvent) {
    console.log(event.target);
    this.showLastName = !this.showLastName
  }



}

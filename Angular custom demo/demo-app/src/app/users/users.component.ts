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


  nameHandler() {
    console.log('CLICKED');
    this.showLastName = !this.showLastName
  }



}

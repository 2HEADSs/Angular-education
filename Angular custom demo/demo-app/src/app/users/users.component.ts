import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  {

  constructor() { }
  users = [
    {
      firstName: 'Stafen',
      lastName: 'Ivanov'
    },
    {
      firstName: 'Georgi',
      lastName: 'Petrov'
    }
  ]

}

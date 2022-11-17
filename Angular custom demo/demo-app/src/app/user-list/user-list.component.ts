import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  user!: { firstName: string, lastName: string }
  showLastName!: boolean
  constructor() { }


}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() singleUser!: { firstName: string, lastName: string }
  @Input() showLastName!: boolean
  constructor() { }


}

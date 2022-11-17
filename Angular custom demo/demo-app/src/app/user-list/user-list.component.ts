import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() singleUser!: { firstName: string, lastName: string }
  @Input() showLastName!: boolean

  @Output() customEvent = new EventEmitter()
  constructor() { }

  selectClickHandler() {
    this.customEvent.emit({ test: 123 })
  }
}

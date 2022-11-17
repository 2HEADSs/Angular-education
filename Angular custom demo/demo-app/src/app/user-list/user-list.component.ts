import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICustomEvent {
  test: number
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() singleUser!: { firstName: string, lastName: string }
  @Input() showLastName!: boolean

  @Output() customEvent = new EventEmitter<ICustomEvent>()
  constructor() { }

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation()
    this.customEvent.emit({ test: 123 })
  }
}

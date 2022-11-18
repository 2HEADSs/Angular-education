import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ICustomEvent {
  test: number
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() singleUser!: { firstName: string, lastName: string }
  @Input() showLastName!: boolean

  @Output() customEvent = new EventEmitter<ICustomEvent>()
  constructor() {
    console.log(this.singleUser);
    
  }
  
  ngOnInit() {
    console.log(this.singleUser);
    
  }
  
  

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation()
    this.customEvent.emit({ test: 123 })
  }


}

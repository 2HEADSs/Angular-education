import { Component, OnInit } from '@angular/core';
import { ICustomEvent } from '../user-list/user-list.component';

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
  slectedUserIndex: null | number = null;


  showLastName: boolean = true;
  constructor() { }

  get showSelectedIndex(): boolean {
    return (this.slectedUserIndex === null ? -1 : this.slectedUserIndex) >= 0
  }

  nameHandler(event: MouseEvent) {
    this.showLastName = !this.showLastName
  }




  indexOfIser(index: number) {
    if (index === this.slectedUserIndex) {
      this.slectedUserIndex = null;
      return;
    }
    this.slectedUserIndex = index;

  }

  customEventHandler($event: ICustomEvent){
    console.log($event);
    
  }



}

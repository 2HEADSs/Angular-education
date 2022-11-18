import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users!: IUser[] | undefined


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadUser().subscribe(console.log)
    this.userService.loadUser().subscribe(users => this.users = users)
  
    
  }


}


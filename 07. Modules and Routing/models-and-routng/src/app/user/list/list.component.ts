import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { UserService } from '../user.service';
import { IUser } from '../../shared/interfaces/user';
import { ThisReceiver } from '@angular/compiler';
import { Test } from 'src/app/test';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: IUser[] | null = null

  constructor(private userServie: UserService,
    private globalLoaderService: GlobalLoaderService,
    private t: Test) { 
      (window as any).t2 = t
    }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void { 
    this.globalLoaderService.showLoader('Loading users');
    this.userServie.loadUsers().subscribe({
      next: (userList) => {
        this.globalLoaderService.hideLoader();
        this.userList = userList
      }
    })
  }

  reloadUsersHandler(): void {
    this.loadUsers()
  }

}

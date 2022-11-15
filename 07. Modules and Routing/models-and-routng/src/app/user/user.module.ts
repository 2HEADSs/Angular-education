import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    Test //{provide: Test, useClass: Test}
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }

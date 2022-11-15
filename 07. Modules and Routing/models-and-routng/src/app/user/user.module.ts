import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }

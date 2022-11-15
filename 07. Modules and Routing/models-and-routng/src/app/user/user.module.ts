import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';
import { UserDetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/user-detail.guard';
import { UserResolver } from './guards/user-detail.resolver';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponent
      },
      {
        path: 'user/detail/:id',
        resolve: {user: UserResolver},
        canActivate: [AuthGuard],
        component: UserDetailComponent
      }
    ])
  ],
  providers: [
    Test //{provide: Test, useClass: Test}
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }

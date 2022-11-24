import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  get isLoggedIn(){
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthService) { }



}

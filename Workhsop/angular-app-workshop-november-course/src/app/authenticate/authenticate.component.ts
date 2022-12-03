
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {


  isAuthenticated = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (user) => {
        this.authService.user = user;
        this.isAuthenticated = false;
      },
      error: () => {
        this.authService.user = null;
        this.isAuthenticated = false;
      }
    })
  }

}

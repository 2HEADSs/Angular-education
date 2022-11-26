import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = 'banana in the box text'

  constructor() { }

  ngOnInit(): void {
  }

  handleFormSubmit(value: { email: string; password: string }): void {
    console.log(value);
    
  }


}

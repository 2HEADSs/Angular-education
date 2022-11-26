import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailSet: string = 'banana@inthe.box.text'

  constructor() { }

  ngOnInit(): void {
  }

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) { return; }
    form.setValue({ email: '', password: '' })
    const value: { email: string; password: string } = form.value
    console.log();

  }


}

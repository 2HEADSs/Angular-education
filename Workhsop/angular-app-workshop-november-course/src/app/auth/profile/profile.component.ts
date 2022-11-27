import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{

  showEditMode = false;

  get user() {
    const { username, email, tel: telephone } = this.authService.user!;
    const [ext, ...tel] = telephone.split(' ')
    return {
      username,
      email,
      tel: tel.join(''),
      ext
    }
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    ext: [''],
    tel: [''],
  })

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.form.setValue(this.user)
  }

  toggleEditMode():void{
    this.showEditMode = !this.showEditMode
  }

  saveProfile(): void{
    if(this.form.invalid){return}
    console.log(this.form.value);
    
  }

}

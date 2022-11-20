import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  loadUser(search: string = '') {
    const query = search ? `?email_like=${search}` : ''
    return this.http.get(`https://jsonplaceholder.typicode.com/users${query}`)
  }
}

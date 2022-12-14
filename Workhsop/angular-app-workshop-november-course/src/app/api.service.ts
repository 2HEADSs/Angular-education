import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { ITheme } from './shared/interfaces/theme';
import { IPost } from './shared/interfaces/posts';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //here we take server- http client
  constructor(private httpClient: HttpClient) { }

  loadThemes(){
    return this.httpClient.get<ITheme[]>(`${apiUrl}/themes`)
  }

  loadTheme(id:number){
    return this.httpClient.get<ITheme>(`${apiUrl}/themes/${id}`)
  }
  // https://localhost:3000/api/posts?limit=5
  loadPosts(limit?: number){
    return this.httpClient.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}`: ''}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../../app/interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

  posts: IPost[] | null = null
  errorFetching = false
  constructor(private apiServie: ApiService) { }

  ngOnInit(): void {
    this.apiServie.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: (err) => {
        this.errorFetching = true;
        console.error(err)
      }
    })
  }
}

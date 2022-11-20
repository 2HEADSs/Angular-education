import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

  constructor(private apiServie: ApiService) { }

  ngOnInit(): void {
    this.apiServie.loadPosts(5).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}

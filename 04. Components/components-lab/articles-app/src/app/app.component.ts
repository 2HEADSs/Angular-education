import { Component } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'articles-app';
  articles = ArticlesComponent
}

import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDesc!: string;
  descToShow!: string;
  articleDescLen!: number;
  showReadMoreBtn: boolean = true;
  imageIsShown: boolean = false;
  imageButtonTtile: string = "Show Image";

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = ''
  }

  ngOnInit(): void {
  }

}

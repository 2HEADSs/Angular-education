import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {
  themeList: ITheme[] | null = null

  constructor(private apiServie: ApiService) { }

  ngOnInit(): void {
    this.apiServie.loadThemes().subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}

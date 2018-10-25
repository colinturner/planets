import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public planets$: Observable<object>;
  public films: object = {};

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.planets$ = this.getData('planets');
    this.getFilms();
  }

  getData(item: string) {
    return this.dataService.getAll<any>(item);
  }

  getFilms() {
    this.getData('films').subscribe((data) => {
      data.results.map((film) => {
        this.films[film.url] = film.title;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.sass']
})
export class PlanetsTableComponent implements OnInit {

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
    return this.dataService.getAll<any[]>(item);
  }

  getFilms() {
    this.getData('films').subscribe((data) => {
      data.results.map((film) => {
        this.films[film.url] = film.title;
      });
    });
  }

  findFilmName(films: string[]) {
    return films.map((film) => this.films[film]);
  }

  terrainList(terrains: string) {
    return terrains.split(', ').map(terrain => _.upperFirst(terrain));
  }
}

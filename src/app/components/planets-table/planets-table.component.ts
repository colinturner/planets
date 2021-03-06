import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { EventEmitter } from '@angular/core';
import { IPlanet, IFilm } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.sass']
})
export class PlanetsTableComponent {

  @Input() planets: IPlanet[];
  @Input() films: IFilm[];
  @Output() sort = new EventEmitter<any>();

  sortBy(field: string) {
    this.sort.next(field);
  }

  findFilmName(films: string[]) {
    return films.map((film) => this.films[film]);
  }

  terrainList(terrains: string) {
    return terrains.split(', ').map(terrain => _.upperFirst(terrain));
  }

  even(i: number) {
    return i % 2 === 0;
  }

  unknown(field: string|number) {
    return (['unknown', -1].includes(field));
  }
}

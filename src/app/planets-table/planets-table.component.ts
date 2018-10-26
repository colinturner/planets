import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.sass']
})
export class PlanetsTableComponent {

  @Input() planets: any;
  @Input() films: any;

  constructor() {}

  findFilmName(films: string[]) {
    return films.map((film) => this.films[film]);
  }

  terrainList(terrains: string) {
    return terrains.split(', ').map(terrain => _.upperFirst(terrain));
  }
}

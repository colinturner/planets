import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import * as _ from 'lodash';
import { IData } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public planets: object = {};
  private films: object = {};
  public itemsCount: number;
  private itemsPerPage = 10;
  private currentPage: number;
  private searchTerm: string;
  private sortDirection = {};

  constructor(
    private dataService: DataService
  ) {
    this.sortDirection = {
      name: 'asc',
      population: 'asc',
      diameter: 'asc',
      rotation_period: 'asc',
      orbital_period: 'asc'
    };
  }

  ngOnInit() {
    this.getPlanets();
    this.getFilms();
  }

  // Search Term setter
  private setSearchTerm(term: string) {
    this.searchTerm = term;
  }

  // START HTTP methods
  private getData(category: string, pageNumber?: number, searchTerm?: string) {
    return this.dataService.getAll<any>(category, pageNumber, searchTerm);
  }

  private setPageInfo(data: IData) {
    this.planets = data;
    this.itemsCount = data.count;
    this.currentPage = this.determineCurrentPage(data);
  }

  private getPlanets(pageNumber?: number, searchTerm?: string) {
    this.getData('planets', pageNumber, searchTerm).subscribe((data) => {
      this.setPageInfo(data);
    });
  }

  private getFilms() {
    this.getData('films').subscribe((data) => {
      data.results.map((film) => {
        this.films[film.url] = film.title;
      });
    });
  }
  // END HTTP methods

  // START Sorting methods
  changeStringsToNumbers(field: string) {
    this.planets['results'].forEach(v => {
      if (!isNaN(v[field])) {
        return v[field] = Number(v[field]);
      }
      if (v[field] === 'unknown') {
        return v[field] = -1;
      }
    });
  }

  private toggleSortDirection(direction: string) {
    return (direction === 'asc') ? 'desc' : 'asc';
  }

  private setSortDirection(field: string, currentDirection) {
    this.sortDirection = _.mapValues(this.sortDirection, () => 'asc');
    this.sortDirection[field] = this.toggleSortDirection(currentDirection);
  }

  sortPlanetsBy(field: string) {
    const currentDirection = this.sortDirection[field];
    this.changeStringsToNumbers(field);
    this.planets['results'] = _.orderBy(this.planets['results'], [field], [this.sortDirection[field]]);
    this.setSortDirection(field, currentDirection);
  }
  // END Sorting methods

  // START Pagination methods
  extractPageFromNextProperty(data: IData) {
    return Number(data.next.match(/([0-9])+/g).pop()) - 1;
  }

  lastPage() {
    return Math.ceil(this.itemsCount / this.itemsPerPage);
  }

  determineCurrentPage(data: IData) {
    if (!data.previous) {
      return 1;
    }
    if (!data.next) {
      return this.lastPage();
    }
    return this.extractPageFromNextProperty(data);
  }
  // END Pagination methods
}

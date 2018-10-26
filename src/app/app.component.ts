import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  private planets: object = {};
  private films: object = {};
  private itemsCount: number;
  private itemsPerPage = 10;
  private currentPage: number;
  private searchTerm: string;
  private searchDirection = {};

  constructor(
    private dataService: DataService
  ) {
    this.searchDirection = {
      name: 'asc',
      population: 'asc',
      diameter: 'asc',
    };
  }

  ngOnInit() {
    this.getPlanets();
    this.getFilms();
  }

  private setSearchTerm(term: string) {
    this.searchTerm = term;
  }

  private getData(category: string, pageNumber?: number, searchTerm?: string) {
    return this.dataService.getAll<any>(category, pageNumber, searchTerm);
  }

  private setPageInfo(data: any) {
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

  private toggleSearchDirection(direction: string) {
    return (direction === 'asc') ? 'desc' : 'asc';
  }

  private changeStringsToNumbers(field: string) {
    this.planets.results.forEach(v => {
      if (!isNaN(v[field])) {
        return v[field] = Number(v[field]);
      }
      if (v[field] === 'unknown') {
        return v[field] = -1;
      }
    });
  }

  private setSearchDirection(field: string, currentDirection) {
    this.searchDirection = _.mapValues(this.searchDirection, () => 'asc');
    this.searchDirection[field] = this.toggleSearchDirection(currentDirection);
  }

  private sortPlanetsBy(field: string) {
    const currentDirection = this.searchDirection[field];
    this.changeStringsToNumbers(field);
    this.planets.results = _.orderBy(this.planets.results, [field], [this.searchDirection[field]]);
    this.setSearchDirection(field, currentDirection);
  }

  private extractPageFromNextProperty(data: any) {
    return Number(data.next.match(/([0-9])+/g).pop()) - 1;
  }

  private lastPage() {
    return Math.ceil(this.itemsCount / this.itemsPerPage);
  }

  private determineCurrentPage(data: any) {
    if (!data.previous) {
      return 1;
    }
    if (!data.next) {
      return this.lastPage();
    }
    return this.extractPageFromNextProperty(data);
  }
}

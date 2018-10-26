import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public planets: object = {};
  public films: object = {};
  public itemsCount: number;
  public itemsPerPage = 10;
  public currentPage: number;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getPlanets();
    this.getFilms();
  }

  getData(item: string) {
    return this.dataService.getAll<any>(item);
  }

  getPlanets() {
    this.getData('planets').subscribe((data) => {
      this.planets = data;
      this.itemsCount = data.count;
      this.currentPage = this.determineCurrentPage(data);
    });
  }

  getFilms() {
    this.getData('films').subscribe((data) => {
      data.results.map((film) => {
        this.films[film.url] = film.title;
      });
    });
  }

  extractPageFromNextProperty(data: any) {
    return Number(data.next.match(/([0-9])+/g).pop());
  }

  determineCurrentPage(data: any) {
    if (!data.previous) {
      return 1;
    }
    if (!data.next) {
      return Math.ceil(this.itemsCount / this.itemsPerPage);
    }
    return this.extractPageFromNextProperty(data);
  }
}

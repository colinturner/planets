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

  private getAllData(item: string, pageNumber?: number) {
    return this.dataService.getAll<any>(item, pageNumber);
  }

  private getSingleData(searchTerm: string, category: string) {
    return this.dataService.getSingle<any>(searchTerm, category);
  }

  private setPageInfo(data: any) {
    this.planets = data;
    this.itemsCount = data.count;
    this.currentPage = this.determineCurrentPage(data);
  }

  private getPlanet(searchTerm: string) {
    this.getSingleData(searchTerm, 'planets').subscribe((data) => {
      this.setPageInfo(data);
    });
  }

  private getPlanets(pageNumber?: number) {
    this.getAllData('planets', pageNumber).subscribe((data) => {
      this.setPageInfo(data);
    });
  }

  private getFilms() {
    this.getAllData('films').subscribe((data) => {
      data.results.map((film) => {
        this.films[film.url] = film.title;
      });
    });
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

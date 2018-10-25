import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.sass']
})
export class PlanetsTableComponent implements OnInit {

  public planets: object;
  public films: object;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getData('planets');
    this.getData('films');
  }

  getData(item: string) {
    this.dataService.getAll<any[]>(item)
    .subscribe((response: any[]) => {
      this[item] = response;
      console.log(this[item]);
    },
    error => () => {
      console.log('Whoops, something went wrong');
    });
  }
}

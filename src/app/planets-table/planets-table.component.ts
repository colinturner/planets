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

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getPlanetsData();
  }

  getPlanetsData() {
    this.dataService.getAll<any[]>()
    .subscribe((response: any[]) => {
      this.planets = response;
      console.log(this.planets);
    },
    error => () => {
      console.log('Whoops, something went wrong');
    });
  }

}

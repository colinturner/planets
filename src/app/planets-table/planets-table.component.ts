import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.sass']
})
export class PlanetsTableComponent implements OnInit {

  public data: object;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getAll<any[]>()
    .subscribe((res: any[]) => {
      this.data = res;
      console.log(this.data);
    },
    error => () => {
      console.log('Whoops, something went wrong');
    });
  }

}

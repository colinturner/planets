import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.sass']
})
export class PlanetsTableComponent implements OnInit {

  public planets$: Observable<object>;
  public films$: Observable<object>;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.planets$ = this.getData('planets');
    this.films$ = this.getData('films');
  }

  getData(item: string) {
    return this.dataService.getAll<any[]>(item);
  }
}

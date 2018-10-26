import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  @Input() itemsCount: any;
  @Input() itemsPerPage: any;
  @Input() currentPage: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  @Input() itemsCount: any;
  @Input() itemsPerPage: any;
  @Input() currentPage: any;
  @Output() changePage = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  goTo(num: number) {
    this.changePage.next(num);
  }

}

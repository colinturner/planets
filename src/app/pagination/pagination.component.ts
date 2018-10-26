import { Component, Input, Output, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnChanges {
  @Input() itemsCount: any;
  @Input() itemsPerPage: any;
  @Input() currentPage: any;
  @Output() changePage = new EventEmitter<any>();
  private lastPage: number;

  constructor() {}

  ngOnChanges() {
    this.lastPage = Math.ceil(this.itemsCount / this.itemsPerPage);
  }

  goTo(num: number) {
    if (num <= 0 || num === this.currentPage) {
      return;
    }
    this.changePage.next(num);
  }

  onFirstPage() {
    return this.currentPage === 1;
  }

  onLastPage() {
    return this.lastPage === this.currentPage;
  }

  onSecondToLastPage() {
    return (this.lastPage - 1) === this.currentPage;
  }

}

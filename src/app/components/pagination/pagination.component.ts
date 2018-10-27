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

  ngOnChanges() {
    this.lastPage = this.calculateLastPage();
  }

  // Go to specific page
  goTo(num: number) {
    if (num <= 0 || num === this.currentPage) {
      return;
    }
    this.changePage.next(num);
  }

  calculateLastPage() {
    return Math.ceil(this.itemsCount / this.itemsPerPage);
  }

  onFirstPage() {
    return this.currentPage === 1;
  }

  onLastPage() {
    return this.currentPage === this.lastPage;
  }

  onSecondToLastPage() {
    return this.currentPage === (this.lastPage - 1);
  }
}

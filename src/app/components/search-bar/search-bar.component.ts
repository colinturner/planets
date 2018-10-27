import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  @Output() searchTerm = new EventEmitter<any>();
  private typingTimer: any;

  private search(term: string) {
    this.searchTerm.next(term);
  }

  public resetTypingTimer() {
    clearTimeout(this.typingTimer);
  }

  public searchWhenFinishedTyping(term: string) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => this.search(term), 200);
  }
}

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

  // Emit the search
  search(term: string) {
    this.searchTerm.next(term);
  }

  // Reset the timer every time the user types a key
  resetTypingTimer() {
    clearTimeout(this.typingTimer);
  }

  // When the user stops typing for 200ms, send the search request
  searchWhenFinishedTyping(term: string) {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => this.search(term), 200);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent {
  public title = 'Welcome to Planets!';
  public description = 'Explore all the worlds of Star Wars in one place';
}

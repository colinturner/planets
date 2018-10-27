import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { PlanetsTableComponent } from './components/planets-table/planets-table.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { HttpClientModule} from '@angular/common/http';
import { Configuration } from './app.constants';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsTableComponent,
    PageHeaderComponent,
    PaginationComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DataService,
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

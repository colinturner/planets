import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { PlanetsTableComponent } from './planets-table/planets-table.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HttpClientModule} from '@angular/common/http';
import { Configuration } from './app.constants';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsTableComponent,
    PageHeaderComponent,
    PaginationComponent
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

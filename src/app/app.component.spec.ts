import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PlanetsTableComponent } from './components/planets-table/planets-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Configuration } from './app.constants';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let data1;
  let data2;
  let data3;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageHeaderComponent,
        PlanetsTableComponent,
        PaginationComponent,
        SearchBarComponent,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        Configuration
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = new AppComponent(null);
    fixture.detectChanges();

    data1 = {
      count: 61,
      next: 'https://swapi.co/api/planets/?page=6',
      previous: 'https://swapi.co/api/planets/?page=4'
    };

    data2 = {
      count: 61,
      next: 'https://swapi.co/api/planets/?page=2',
      previous: null
    };

    data3 = {
      count: 61,
      next: null,
      previous: 'https://swapi.co/api/planets/?page=6',
    };
  });

  it('should create the app', () => {
    const appComp = fixture.debugElement.componentInstance;
    expect(appComp).toBeTruthy();
  });

  it('should render page header', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-page-header').textContent).toContain('Explore all the worlds');
  });

  describe('extractPageFromNextProperty method', () => {
    it('should extract current page from "next page" property string', () => {
      expect(app.extractPageFromNextProperty(data1)).toBe(5);
    });
  });

  describe('determineCurrentPage method', () => {
    it('should determine the current page', () => {
      expect(app.determineCurrentPage(data1)).toBe(5);
      expect(app.determineCurrentPage(data2)).toBe(1);
      app.itemsCount = data3.count;
      expect(app.determineCurrentPage(data3)).toBe(7);
    });
  });
});

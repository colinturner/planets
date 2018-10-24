import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PlanetsTableComponent } from './planets-table/planets-table.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageHeaderComponent,
        PlanetsTableComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render page header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-page-header').textContent).toContain('Explore all the worlds');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let currentPageEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    currentPageEl = fixture.debugElement.query(By.css('div.current-page'));
    console.log(currentPageEl);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct current page numbers', () => {
    component.itemsCount = 61;
    component.itemsPerPage = 10;
    component.currentPage = 2;
    fixture.detectChanges();
    console.log('currentPageEl', currentPageEl);
    expect(currentPageEl.nativeElement.innerHTML).toBe(' 2 ');
  });
});

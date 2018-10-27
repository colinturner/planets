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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct current page numbers', () => {
    component.itemsCount = 61;
    component.itemsPerPage = 10;
    component.currentPage = 2;
    fixture.detectChanges();
    expect(currentPageEl.nativeElement.innerHTML).toBe(' 2 ');
  });

  it('should not allow illegal page changes', () => {
    component.currentPage = 3;
    expect(component.goTo(3)).toBe(undefined);
    component.currentPage = 1;
    expect(component.goTo(0)).toBe(undefined);
  });

  it('should calculate value of last page', () => {
    component.itemsCount = 61;
    component.itemsPerPage = 10;
    expect(component.calculateLastPage()).toBe(7);

    component.itemsCount = 60;
    expect(component.calculateLastPage()).toBe(6);
  });
});

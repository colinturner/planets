import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsTableComponent } from './planets-table.component';

describe('PlanetsTableComponent', () => {
  let comp: PlanetsTableComponent;
  let fixture: ComponentFixture<PlanetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsTableComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  describe('terrainList', () => {
    it('should create Terrains array from string', () => {
      expect(comp.terrainList('mountains, volcanoes, rocky deserts'))
      .toEqual([ 'Mountains', 'Volcanoes', 'Rocky deserts' ]);
    });
  });

  describe('findFilmName', () => {
    it('should create array with film names', () => {
      comp.films = {
        'https://swapi.co/api/films/6/': 'Revenge of the Sith',
        'https://swapi.co/api/films/1/': 'A New Hope'
      };
      expect(comp.findFilmName([
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/1/'
    ]))
      .toEqual([ 'Revenge of the Sith', 'A New Hope' ]);
    });
  });

  describe('unknown()', () => {
    it('should determine whether value is unknown', () => {
      expect(comp.unknown(-1)).toEqual(true);
      expect(comp.unknown('unknown')).toEqual(true);
      expect(comp.unknown('2000')).toEqual(false);
      expect(comp.unknown(2000)).toEqual(false);
    });
  });

  describe('even()', () => {
    it('should determine whether value is even', () => {
      expect(comp.even(1)).toEqual(false);
      expect(comp.even(0)).toEqual(true);
    });
  });
});

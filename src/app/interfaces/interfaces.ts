export interface IData {
  count: number;
  next: string|null;
  previous: string|null;
  results: IPlanetResults|IFilmResults;
}

export interface IPlanetResults extends Array<IPlanet> {}

export interface IPlanet {
  name: string;
  rotation_period: string|number;
  orbital_period: string|number;
  diameter: string|number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string|number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IFilmResults extends Array<IFilm> {}

export interface IFilm {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

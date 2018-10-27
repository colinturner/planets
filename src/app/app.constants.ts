import { Injectable } from '@angular/core';

// Star Wars API constants - easily changeable from here in the future
@Injectable()
export class Configuration {
  public serverUrl = 'https://swapi.co/api/';
  public pageOption = '/?page=';
  public search = '&search=';
}

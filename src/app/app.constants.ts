import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public serverUrl = 'https://swapi.co/api/';
  public pageOption = '/?page=';
  public search = '&search=';
}

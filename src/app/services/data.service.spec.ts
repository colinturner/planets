import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Configuration } from '../app.constants';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler, Configuration]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});

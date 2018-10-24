import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private actionUrl: string;
  private search: string;
  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.serverUrl;
    this.search = configuration.search;
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }

  public getSingle<T>(name: string): Observable<T> {
    return this.http.get<T>(this.actionUrl + this.search + name);
  }
}

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
  private pageOption: string;
  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.serverUrl;
    this.search = configuration.search;
    this.pageOption = configuration.pageOption;
  }

  public getAll<T>(category: string, pageNumber?: number, searchTerm?: string): Observable<T> {
    return this.http.get<T>(
      this.actionUrl
      + category
      + this.pageOption
      + (pageNumber || '')
      + this.search
      + (searchTerm || ''));
  }
}


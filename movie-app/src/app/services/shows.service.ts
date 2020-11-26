import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  TOP_SHOWS: string = 'https://api.themoviedb.org/3/tv/popular?api_key=';
  SEARCH_SHOW: string = 'https://api.themoviedb.org/3/search/tv?api_key=';
  ALL_SHOWS: string = 'https://api.themoviedb.org/3/tv/popular?api_key=';
  API_KEY: string = '99ad5de99d60fca56d0ed4680583e487';
  LANG: string = '&language=en-US&page=';

  constructor(private http: HttpClient) { }

  getTopShows(): Observable<any> {
    return this.http.get(this.TOP_SHOWS + this.API_KEY + this.LANG);
  }

  getSearchShows(search: any, page: any): Observable<any> {
     return this.http.get(this.SEARCH_SHOW + this.API_KEY + this.LANG + page + '&query=' + search + '&include_adult=false');
  }

  getAllShows(i: any): Observable<any> {
    return this.http.get(this.ALL_SHOWS + this.API_KEY + this.LANG + i);
 }
}

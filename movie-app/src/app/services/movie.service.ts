import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  TOP_MOVIES: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
  ALL_MOVIES: string = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  API_KEY: string = '99ad5de99d60fca56d0ed4680583e487';
  LANG: string = '&language=en-US&page=';
  
  constructor(private http: HttpClient) {
  }

  getTopMovies(): Observable<any> {
    return this.http.get(this.TOP_MOVIES + this.API_KEY + this.LANG + '1');
  }

  getAllMovies(i: any): Observable<any> {
     return this.http.get(this.ALL_MOVIES + this.API_KEY + this.LANG + i);
  }
}

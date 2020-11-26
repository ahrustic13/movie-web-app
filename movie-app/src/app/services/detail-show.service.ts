import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailShowService {

  SHOW_DETAIL: string = 'https://api.themoviedb.org/3/tv/';
  FOR_API: string = '?api_key=';
  API_KEY: string = '99ad5de99d60fca56d0ed4680583e487';
  LANG: string = '&language=en-US';
  
  constructor(private http: HttpClient) { }

  getShowDetail(id: any): Observable<any> {
    return this.http.get(this.SHOW_DETAIL + id + this.FOR_API + this.API_KEY + this.LANG);
  }
}
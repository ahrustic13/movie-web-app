import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private pageNumberMovie = new BehaviorSubject<string>("");
  moviePage = this.pageNumberMovie.asObservable();
  
  private pageNumberShow = new BehaviorSubject<string>("");
  showPage = this.pageNumberShow.asObservable();

  constructor() { }

  changeMoviePageNumber(number: string) {
    this.pageNumberMovie.next(number);
  }

  changeShowPageNumber(number: string) {
    this.pageNumberShow.next(number);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class InputShareService {

  private searchInputSource = new BehaviorSubject<string>("proba");
  searchInput = this.searchInputSource.asObservable();

  constructor() { }

  changeSearchInputValue(searchInput: string) {
    this.searchInputSource.next(searchInput);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class InputShareService {

  private searchInputSource = new BehaviorSubject<string>("");
  searchInput = this.searchInputSource.asObservable();

  constructor() { }

  changeSearchInputValue(searchInput: string) {
    this.searchInputSource.next(searchInput);
  }
}

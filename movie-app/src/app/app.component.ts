import { Component } from '@angular/core';
import { InputShareService } from './services/input-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';
  search: string;

  constructor(private inputShare: InputShareService) { 
    this.search = "";
  }

  ngOnInit(): void {
    this.inputShare.searchInput.subscribe(searchInput => this.search = searchInput)
  }

  newSearchInput(search: string) {
    this.inputShare.changeSearchInputValue(search);
  }
}

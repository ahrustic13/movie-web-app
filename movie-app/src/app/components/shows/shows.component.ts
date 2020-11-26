import { Component, Input, OnInit } from '@angular/core';
import { InputShareService } from 'src/app/services/input-share.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  topShows: any;
  searchShows: any;
  search: string;
  showId: string;
  timeout: any = null;
  currentPage: any;
  numberOfPages: any;

  constructor(private showService: ShowsService, private shareInput: InputShareService) { 
    this.getTopShows();
    this.search = "";
    this.showId = "";
    this.currentPage = 1;
    this.numberOfPages = 1;
    this.shareInput.searchInput.subscribe(inputValue => this.search = inputValue);
    this.getSearchShows();
  }

  ngOnInit(): void {
    this.shareInput.searchInput.subscribe(inputValue => this.search = inputValue);
    this.getSearchShows();
    this.getTopShows();
  }

  getTopShows(): void {
    this.showService.getTopShows().subscribe((data: any) => {
      this.topShows = data.results;
      this.topShows.splice(-10,10);
    });
  }

  getSearchShows(): void {
    this.showService.getSearchShows(this.search, this.currentPage).subscribe((data: any) => {
      this.searchShows = data.results;
      this.numberOfPages = data.total_pages;
    });
  }

  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.executeListing(event.target.value);
      }
    }, 1000);
  }

  private executeListing(value: string) {
    this.search = value;
    this.getSearchShows();
  }

  newInputValue() {
    this.getSearchShows();
  }

  next() {
    if (this.currentPage === this.numberOfPages) this.currentPage = this.numberOfPages;
    else this.currentPage++;
    this.getSearchShows();
  }

  previous() {
    if (this.currentPage === 1) this.currentPage = 1;
    else this.currentPage--;
    this.getSearchShows();
  }

  searchShow(input: any) {
    this.shareInput.changeSearchInputValue(input);
  }
}

import { MovieService } from './../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { InputShareService } from 'src/app/services/input-share.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  topMovies: any;
  allMovies: any; 
  searchMovies: any;
  search: string;
  timeout: any = null;
  currentPage: any;
  numberOfPages: any;
  state: any;

  constructor(private movieService: MovieService, private shareInput: InputShareService, private stateService: StateService) {
    this.search = "";
    this.allMovies = [];
    this.currentPage = 1;
    this.numberOfPages = 1;
    this.shareInput.searchInput.subscribe(inputValue => this.search = inputValue);
    this.stateService.moviePage.subscribe(inputValue => this.currentPage = inputValue);
    this.getSearchMovies();
    this.getTopMovies();
  }

  ngOnInit(): void {
    this.getTopMovies();
    this.allMovies = [];
    /*for (let i = 1; i <= 500; i++) {
      this.getAllMovies(i);
    }*/
    this.shareInput.searchInput.subscribe(inputValue => this.search = inputValue);
    this.stateService.moviePage.subscribe(inputValue => this.currentPage = inputValue);
    this.getSearchMovies();
  }

  getTopMovies(): void {
    this.movieService.getTopMovies().subscribe((data: any) => {
      this.topMovies = data.results;
      this.topMovies.splice(-10,10);
    });
  }

  getSearchMovies(): void {
    this.movieService.getSearchMovies(this.search, this.currentPage).subscribe((data: any) => {
      this.searchMovies = data.results;
      this.numberOfPages = data.total_pages;
    });
  }

  getAllMovies(i:any): void {
    this.movieService.getAllMovies(i).subscribe((data: any) => {
      this.allMovies = this.allMovies.concat(data.results);
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
    this.getSearchMovies();
  }

  next() {
    if (this.currentPage === this.numberOfPages) this.currentPage = this.numberOfPages;
    else this.currentPage++;
    this.getSearchMovies();
    this.stateService.changeMoviePageNumber(this.currentPage);
  }

  previous() {
    if (this.currentPage === 1) this.currentPage = 1;
    else this.currentPage--;
    this.getSearchMovies();
    this.stateService.changeMoviePageNumber(this.currentPage);
  }

  newInputValue() {
    this.shareInput.changeSearchInputValue(this.search);
    this.getSearchMovies();
  }
}

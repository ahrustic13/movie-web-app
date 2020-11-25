import { MovieService } from './../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { InputShareService } from 'src/app/services/input-share.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  topMovies: any;
  allMovies: any;

  search: string;

  constructor(private movieService: MovieService, private shareInput: InputShareService) {
    this.search = "";
    this.allMovies = [];
  }

  ngOnInit(): void {
    this.getTopMovies();
    for (let i = 1; i <= 500; i++) {
      this.getAllMovies(i);
    }
    //this.allMovies = this.getTopMovies();
    this.shareInput.searchInput.subscribe(inputValue => this.search = inputValue);
  }

  getTopMovies(): void {
    this.movieService.getTopMovies().subscribe((data: any) => {
      this.topMovies = data.results;
      this.topMovies.splice(-10,10);
    });
  }

  getAllMovies(i:any): void {
    this.movieService.getAllMovies(i).subscribe((data: any) => {
      this.allMovies = this.allMovies.concat(data.results);
    });
  }

  newInputValue() {
    this.shareInput.changeSearchInputValue(this.search);
  }

}

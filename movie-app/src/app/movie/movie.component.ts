import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  topMovies: any;

  movieSearch: string;

  constructor(private movieService: MovieService) {
    this.movieSearch = "";
  }

  ngOnInit(): void {
    this.getTopMovies();
  }

  getTopMovies(): void {
    this.movieService.getTopMovies().subscribe((data: any) => {
      this.topMovies = data;
      console.log(data);
    });
  }

}

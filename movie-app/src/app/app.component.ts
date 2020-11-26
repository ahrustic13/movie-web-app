import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputShareService } from './services/input-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';

  navShowToggle: boolean = true;
  navMovieToggle: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate([''])
  }

  showToggle() {
    this.navShowToggle = true;
    this.navMovieToggle = false;
  }

  movieToggle() {
    this.navShowToggle = false;
    this.navMovieToggle = true;
  }
}

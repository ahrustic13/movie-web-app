import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './components/movie/movie.component';
import { ShowsComponent } from './components/shows/shows.component';
import { DetailShowComponent } from './components/detail-show/detail-show.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

const routes: Routes = [
  { path: "", component: ShowsComponent},
  { path: "movies", component: MovieComponent},
  { path: "movies/:id", component: DetailMovieComponent},
  { path: "shows", component: ShowsComponent},
  { path: "shows/:id", component: DetailShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

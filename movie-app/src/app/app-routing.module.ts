import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './components/movie/movie.component';
import { ShowsComponent } from './components/shows/shows.component';

const routes: Routes = [
  { path: "", component: ShowsComponent},
  { path: "movies", component: MovieComponent},
  { path: "shows", component: ShowsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

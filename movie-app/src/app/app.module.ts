import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchPipe } from "./pipes/search.pipe";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { ShowsComponent } from './components/shows/shows.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailShowComponent } from './components/detail-show/detail-show.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    AppComponent, 
    MovieComponent,
    ShowsComponent,
    SearchPipe,
    DetailShowComponent,
    DetailMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

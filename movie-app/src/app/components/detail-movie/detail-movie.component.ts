import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DetailMovieService } from 'src/app/services/detail-movie.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  id: any;
  movie: any;
  videos: any;
  videoUrl: any;

  constructor(private detailService: DetailMovieService, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params.id;
      this.getMovieDetail(params.id);
      this.getVideos(params.id);
    })
  }

  getMovieDetail(id: any) {
    this.detailService.getMovieDetail(id).subscribe((data: any) => {
      this.movie = data;
    });
  }

  getVideos(id: any) {
    this.detailService.getVideos(id).subscribe((data: any) => {
      this.videos = data.results;
      if (this.videos.length > 0) {
        this.videoUrl = 'https://www.youtube.com/watch?v=' + this.videos[0].key;
      }
      console.log(this.videos);
    });
  }

  videoURL() {
    this.videoUrl.bypassSecurityTrustUrl(this.videoUrl);
  }
  
  backClicked() {
    this._location.back();
  }

}

import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DetailMovieService } from 'src/app/services/detail-movie.service';
import {Location} from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

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
  videoDisplay: boolean = false;
  imageDisplay: boolean = true;
  dangerousVideoUrl: any;

  constructor(private detailService: DetailMovieService, private route: ActivatedRoute, private _location: Location, private dom:DomSanitizer) {
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
        //this.videoUrl = this.dom.bypassSecurityTrustUrl('https://www.youtube.com/embed/' + this.videos[0].key); 
        //this.videoUrl = 'https://www.youtube.com/embed/' + this.videos[0].key; 
        //console.log(this.videos[0].key);
        this.dangerousVideoUrl = this.videos[0].key;
        this.videoUrl = this.dom.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        this.imageDisplay = false;
        this.videoDisplay = true;
      }
    });
  }

  videoURL() {
    this.videoUrl.bypassSecurityTrustUrl(this.videoUrl);
  }
  
  backClicked() {
    this._location.back();
  }

}

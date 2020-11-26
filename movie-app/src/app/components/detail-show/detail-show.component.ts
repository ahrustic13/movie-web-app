import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DetailShowService } from 'src/app/services/detail-show.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-show',
  templateUrl: './detail-show.component.html',
  styleUrls: ['./detail-show.component.css']
})
export class DetailShowComponent implements OnInit {

  id: any;
  show: any;

  constructor(private detailService: DetailShowService, private route: ActivatedRoute, private _location: Location) {

  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params.id;
      this.getShowDetail(params.id);
    })
  }

  getShowDetail(id: any) {
    this.detailService.getShowDetail(id).subscribe((data: any) => {
      this.show = data;
    });
  }
  
  backClicked() {
    this._location.back();
  }
}

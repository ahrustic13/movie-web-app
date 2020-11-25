import { Component, Input, OnInit } from '@angular/core';
import { InputShareService } from 'src/app/services/input-share.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  topShows: any;
  searchShows: any;
  allShows: any;
  search: string;

  constructor(private showService: ShowsService,private shareInput: InputShareService) { 
    this.getTopShows();
    this.search = "";
  }

  ngOnInit(): void {
    this.shareInput.searchInput.subscribe(inputValue => this.search = inputValue);
    this.allShows = [];
    for (let i = 1; i <= 500; i++) {
      this.getAllShows(i);
    }
  }

  getTopShows(): void {
    this.showService.getTopShows().subscribe((data: any) => {
      this.topShows = data.results;
      this.topShows.splice(-10,10);
    });
  }

  getSearchShows(): void {
    this.showService.getSearchShows(this.search, 1).subscribe((data: any) => {
      this.searchShows = data.results;
      console.log(data.results);
    });
  }

  getAllShows(i:any): void {
    this.showService.getAllShows(i).subscribe((data: any) => {
      this.allShows = this.allShows.concat(data.results);
    });
  }


  newInputValue() {
    this.getSearchShows();
  }

  searchShow(input: any) {
    console.log(input);
    this.shareInput.changeSearchInputValue(input);
  }
}

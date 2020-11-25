import { Component, Input, OnInit } from '@angular/core';
import { InputShareService } from 'src/app/services/input-share.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  topShows: any;
  allShows: any;

  search: string;

  constructor(private shareInput: InputShareService) { 
    this.search = "";
  }

  ngOnInit(): void {
    this.shareInput.searchInput.subscribe(inputValue => this.search = inputValue);
  }

  newInputValue() {
    this.shareInput.changeSearchInputValue(this.search);
  }
}

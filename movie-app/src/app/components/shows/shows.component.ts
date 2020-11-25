import { Component, Input, OnInit } from '@angular/core';
import { InputShareService } from './../../services/input-share.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  topShows: any;
  allShows: any;

  @Input() search: string;

  constructor(private inputShare: InputShareService) { 
    this.search = "";
  }

  ngOnInit(): void {
    this.inputShare.searchInput.subscribe(searchInput => this.search = searchInput)
  }

  newSearchInput(search: string) {
    this.inputShare.changeSearchInputValue(search);
  }
}

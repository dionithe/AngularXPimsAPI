import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.css']
})
export class SearchTabComponent implements OnInit {
  @Output() sender = new EventEmitter();

  public search : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchAction(search:string) : void {
    this.sender.emit(search);
  }

}

import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
declare const getEventsBySearch: any;

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public eventsList:any;
  @Input() search?:string;
  @Output() sender = new EventEmitter();

  constructor() { }

  async ngOnInit(): Promise<void> {
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (! changes['search']['firstChange']) {
      this.eventsList = await getEventsBySearch('venue_city', changes['search']['currentValue']);
    } 
  }

  receiver(receivedFromChild:any) {
    this.sender.emit(receivedFromChild);
  }

}

import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  @Input() search?: any;
  @Output() sender = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  receiver(receivedFromChild:any){
    this.search = receivedFromChild;
  }

}

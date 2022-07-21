import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
   @Input() event?: any;
   @Output() sender = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectEventCard(eventID:number): void {
    this.sender.emit(eventID);
  }

}

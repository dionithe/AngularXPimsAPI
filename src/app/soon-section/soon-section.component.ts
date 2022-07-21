import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const getEventsInCity: any;

@Component({
  selector: 'app-soon-section',
  templateUrl: './soon-section.component.html',
  styleUrls: ['./soon-section.component.css']
})
export class SoonSectionComponent implements OnInit {
  public eventsList:any;
  @Input() city?: any;
  @Output() sender = new EventEmitter();

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.eventsList = await getEventsInCity(this.city);
  }

  receiver(receivedFromChild:any){
    this.sender.emit(receivedFromChild);
  }

}

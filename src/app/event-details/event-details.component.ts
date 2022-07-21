import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
declare const getEventById: any;
declare const getTicketCountsByEventId: any;
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  @Input() eventID?: any;
  public eventBox : any;
  public event : any;

  constructor() { }

  async ngOnInit(): Promise<void> {
      this.eventBox = document.querySelector("#eventBox");
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (! changes['eventID']['firstChange']) {
      this.eventBox.classList.remove("hidden");
      this.event = await getEventById(changes['eventID']['currentValue']);
      this.event.sales = await getTicketCountsByEventId(changes['eventID']['currentValue']);
      console.log(this.event);
    } 
  }

  closeEventDetails() : void {
    this.eventBox.classList.add("hidden");
  }

}

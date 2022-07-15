import { Component, OnInit, Input } from '@angular/core';
declare const getEventsInCity: any;
declare let eventsList: any;

@Component({
  selector: 'app-soon-section',
  templateUrl: './soon-section.component.html',
  styleUrls: ['./soon-section.component.css']
})
export class SoonSectionComponent implements OnInit {
  public eventsList:any;
  @Input() city?: any;

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.eventsList = await getEventsInCity(this.city);
  }

}

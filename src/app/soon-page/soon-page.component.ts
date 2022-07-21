import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soon-page',
  templateUrl: './soon-page.component.html',
  styleUrls: ['./soon-page.component.css']
})
export class SoonPageComponent implements OnInit {
  public selectedEventID : any = null;

  constructor() { }

  ngOnInit(): void {
  }

  receiver(receivedFromChild:any){
    console.log(receivedFromChild);
    this.selectedEventID = receivedFromChild;
  }

}

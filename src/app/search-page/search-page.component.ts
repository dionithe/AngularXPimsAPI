import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public selectedEventID : any = null;

  constructor() { }

  ngOnInit(): void {
  }

  receiver(receivedFromChild:any){
    console.log(receivedFromChild);
    this.selectedEventID = receivedFromChild;
  }

}

import { Component, OnInit } from '@angular/core';
import { EventServiceComponent } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `.container {padding-left:20px; padding-rigth:20px;}
     .event-image:{height:100px; }
    `
  ]
})
export class EventDetailsComponent implements OnInit {

  event: any;
  constructor(private eventService: EventServiceComponent ){

  }

  ngOnInit() {
    this.event = this.eventService.getEvents(1);
  }

}

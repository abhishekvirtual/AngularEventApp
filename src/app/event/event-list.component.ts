import { Component , OnInit} from '@angular/core';
import { EventServiceComponent } from './shared/event.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-list',
  template:`
  <div>
  <h1>Upcomming Angular Events</h1>
  <hr />
  <div class="row">
  <div class="col-md-5" *ngFor="let event of events">
  <event-thumbnail  [event] = 'event' ></event-thumbnail>
  </div>
  </div>


  </div>
  `
})
export class EventListComponent implements OnInit{

  events:any[];
  constructor(private eventsService: EventServiceComponent) {

  }

  handleEventClick(data) {
    console.log('Responce :' + data);
  }

  ngOnInit(){
    this.events = this.eventsService.getEvents();
  }
}

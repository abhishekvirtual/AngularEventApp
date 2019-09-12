import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-list',
  template:`
  <div>
  <h1>Upcomming Angular Events</h1>
  <hr />
  <event-thumbnail #thumbnail (eventClick) = 'handleEventClick($event)' [event] = 'event1' ></event-thumbnail>
  <button class="btn btn-primary" (click) = "thumbnail.callfoo()">click Me !!!</button>
  </div>
  `
})
export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnet-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
  handleEventClick(data) {
    console.log('Responce :' + data);
  }
}

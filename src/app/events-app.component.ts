import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
  <event-nav></event-nav>
  <router-outlet></router-outlet>`,

})
export class EventsAppComponent {
  title = 'EventApp';
}

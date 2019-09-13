import { EventListComponent } from './event/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';

export const appRoutes = [
  {path: 'events', component:EventListComponent },
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full' },
];



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './event/event-list.component';
import { EventThumbnailComponent } from './event/event-thumbnail.component';
import { EventNavComponent } from './nav/event-nav.component';
import { EventServiceComponent } from './event/shared/event.service';
import { ToastrService } from './common/toastr.service';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventServiceComponent,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

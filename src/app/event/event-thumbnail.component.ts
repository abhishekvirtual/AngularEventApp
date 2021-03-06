import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
   <div class="well hoverwell thumbnail">
  <h2>{{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
  <div [ngStyle] = "getStylesFunc()" [ngSwitch] = "event?.time">Time: {{event?.time}}
  <span *ngSwitchCase = "'8:00 am'">(EarlyStart)</span>
  <span *ngSwitchCase = "'10:00 am'">(LateStart)</span>
  <span *ngSwitchDefault>(Normal Start)</span>
  </div>
  <div>Price: \${{event?.price}} </div>
  <div [hidden] = "!event?.location">
    <span>Location : {{event?.location?.address}}</span>
    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
  </div>
  <div [hidden] = "!event?.OnlineUrl">
    OnlineUrl: {{event?.OnlineUrl}}
  </div>
</div>
  `,
  styles :[`
 
  .pad-left{margin-left:20px;}
  .well div{color : #bbb}
  `],

})
export class EventThumbnailComponent {

  @Input() event: any;
  getStylesFunc(): any {
    if(this.event && this.event.time === '8:00 am')
      return {"font-weight":"bold" ,"color":"green"};
     return {};

  }
}

import { Component } from '@angular/core';


@Component ({
  // tslint:disable-next-line:component-selector
  selector: 'event-nav',
  templateUrl: './event-nav.component.html',
  styles: [`
  .nav .navbar-nav {font-size: 15px;}
  #serachForm {margin-rigth:100px}
  @media (max-width: 1200px) {#searchForm {display:none}}`]
})
export class EventNavComponent {

}

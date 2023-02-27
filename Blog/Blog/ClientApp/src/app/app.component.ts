import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { slideInAnimation } from './animations';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'app';

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData(): any {
    const result = this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    return result;
  }
}

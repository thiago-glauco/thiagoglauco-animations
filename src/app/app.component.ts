import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow',
      })
      ),
      state('close', style({
        height: '150px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => close', 
        animate('0.5s ease-in-out')
      ),
      transition('close => open', 
        animate('0.5s  ease-in-out')
      ),
  ])]
})
export class AppComponent  {
  name = 'Angular';
  isOpen = true;

  togle() {
    this.isOpen = !this.isOpen;
  }
}

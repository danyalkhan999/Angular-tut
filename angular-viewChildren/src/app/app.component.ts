import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-viewChildren';

  toggle: boolean = true;

  onToggle() {
    this.toggle = !this.toggle;
  }
}

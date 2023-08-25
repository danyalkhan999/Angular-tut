import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-viewChildren';

  fullName: string = '';

  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;

  showName() {
    let name: string = '';
    this.inputElements.forEach((i) => {
      name += i.nativeElement.value;
    });
    this.fullName = name.trim();
    console.log(this.fullName);
  }
}

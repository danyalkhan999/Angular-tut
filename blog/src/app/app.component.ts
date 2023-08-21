import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = ' Angular';
    count = 0;
    counter(type: string) {
        type === '++' ? this.count++ : this.count--;
    }
}

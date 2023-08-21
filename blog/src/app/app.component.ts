import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = ' Angular';
    data = 'Danyal Khan';
    functionClick() {
        console.log('Function clicked');
    }
    getData(val: string) {
        console.log(val);
    }
}

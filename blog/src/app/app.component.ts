import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = ' Angular';
    data = 'Danyal Khan';
    name = '';
    functionClick() {
        console.log('Function clicked');
    }
    getData(val: string) {
        this.name = val;
    }

    printName() {
        console.log(this.name);
    }
}

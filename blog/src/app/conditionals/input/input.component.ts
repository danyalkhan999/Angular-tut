import { Component } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent {
    private number = 0;
    public win = false;
    public score = 0;

    functionClick(val: any) {
        this.number = Math.floor(Math.random() * 10);
        console.log('random number', this.number);
        val = parseInt(val);
        if (val === this.number) {
            this.win = true;
            console.log(this.win);
            this.score += 1;
        } else {
            this.win = false;
            console.log(this.win);
            if (this.score > 0) {
                this.score -= 1;
            }
        }
    }
}

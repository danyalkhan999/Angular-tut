import { Component } from '@angular/core';

@Component({
    selector: 'app-country-list',
    template: `
        <div class="box">
            <p>India</p>
            <p>China</p>
            <p>Japan</p>
            <p>UAE</p>
            <p>America</p>
        </div>
    `,
    styles: [
        `
            .box {
                display: flex;
                justify-content: center;
                align-items: center;

                color: tan;
                flex-direction: column;
                height: 50vh;
                width: 50vw;
            }
        `,
    ],
})
export class CountryListComponent {}

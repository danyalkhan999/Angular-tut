import { Component } from '@angular/core';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styles: [
        `
            .user {
                color: red;
            }
        `,
    ],
})
export class UsersListComponent {}

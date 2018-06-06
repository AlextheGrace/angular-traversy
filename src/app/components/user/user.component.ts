import { Component } from '@angular/core';
import { User } from '../../models/User';
@Component({
    selector: 'app-user',
    // template: '<h2>sean banan</h2>'
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    
    user:User;

    constructor() {


    }
}

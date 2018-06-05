import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {
	user: User = {
		firstName: '',
		lastName: '',
		email: ''
  };
  
	users: User[];
	loaded: boolean = false;
	enableAdd: boolean = false;
	currentClasses = {};
	currentStyles = {};
	isActive: boolean;
	hide: boolean;

	constructor() {}

	ngOnInit() {
		this.users = [
			{
				firstName: 'big',
				lastName: 'man',
        email: 'bigman@mail.com',
        hide:true
			},
			{
				firstName: 'john',
				lastName: 'doe',
				email: 'john@doe.com',
				registered: new Date('04/04/2018 12:30:00'),
				hide: true
			},

			{
				firstName: 'alex',
				lastName: 'grace',
				email: 'alex@gmail.com',
				registered: new Date('09/10/2013 15:30:00'),
				hide: true
			}
		];
		this.loaded = true;
		this.enableAdd = true;

		this.setCurrentClasses();
	}

	addUser() {
		this.user.hide = true;
		this.user.registered = new Date();
		this.users.unshift(this.user);
	}

	toggleHide(user: User) {
		user.hide = !user.hide;
	}

	onSubmit(e) {
		e.preventDefault();
	}

	fireEvent(e) {
		console.log(e.target.value);
	}

	setCurrentClasses() {
		this.currentClasses = {
			'btn-success': this.enableAdd
		};
	}
}

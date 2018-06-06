import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
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
	showUserForm: boolean = true;
	form: any;
	data: any;

	constructor(private _userService: UserService) {}

	ngOnInit() {
		//get users from service
		this._userService.getUsers().subscribe((users) => {
			this.users = users;
			this.loaded = true;
		});

		this.loaded = true;
		this.enableAdd = true;

		this.setCurrentClasses();

		this._userService.getData().subscribe((data) => {
			console.log(data);
		});
	}

	addUser() {
		this.user.hide = true;
		this.user.registered = new Date();
		this.users.unshift(this.user);
	}

	toggleHide(user: User) {
		user.hide = !user.hide;
	}

	onSubmit({ value }: { value: User }) {
		value.isActive = true;
		value.registered = new Date();
		value.hide = true;
		this._userService.addUser(value);

		this.form.reset();
	}

	// fireEvent(e) {
	// 	console.log(e.target.value);
	// }

	setCurrentClasses() {
		this.currentClasses = {
			'btn-success': this.enableAdd
		};
	}
}

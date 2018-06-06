import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { of } from  'rxjs/observable/of';

@Injectable()
export class UserService {
	users: User[];
	data: Observable<any>;

	constructor() {
		this.users = [
			{
				firstName: 'big',
				lastName: 'man',
				email: 'bigman@mail.com',
				hide: true
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
	}

	getData() {
		this.data = new Observable((observer) => {
			setTimeout(() => {
				observer.next(0);
			}, 1000);

			setTimeout(() => {
				observer.next(1);
			}, 2000);

			setTimeout(() => {
				observer.next(2);
      }, 3000);
    });
    
    return this.data;
	}

	getUsers(): Observable<User[]>{
		console.log('fetching users from service');
		return of(this.users);
	}

	addUser(user: User) {
		console.log('creating user from service');
		this.users.unshift(user);
	}
}

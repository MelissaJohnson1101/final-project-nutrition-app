import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { FoodComponent } from './components/food.component';
import { AvatarComponent } from './components/avatar.component';
import { SignInComponent } from './components/signin.component';
import { UserLoggedinRoute } from './routes/userloggedin.route';


@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES, SignInComponent, UserLoggedinRoute],
    template: `<div>
			  	<a [routerLink]="['/login']">Login</a>
			  	<router-outlet></router-outlet>
			  </div>`
})
@Routes([
	{
		path: '/',
		component: SignInComponent
	},
	{
		path: '/login',
		component: SignInComponent
	},
	{
		path: '/userloggedin',
		component: UserLoggedinRoute
	}
])

export class AppComponent { 
	constructor() { } 
}

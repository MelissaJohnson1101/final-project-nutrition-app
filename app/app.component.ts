import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { FoodChoicesComponent } from './services/food-choice.component';
import { AvatarAreaComponent } from './services/avatar.component';
import { LoginViewComponent } from './routes/login-route-component';
import {UserLoggedinViewComponent} from './routes/userloggedin-route.component';
import {CollapseFeature} from './services/toggle-service-show.component';

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES, LoginViewComponent, UserLoggedinViewComponent, CollapseFeature],
    template: `<div>
			  	<a [routerLink]="['/login']">Login</a>
			  	<router-outlet></router-outlet>
			  </div>`
})
@Routes([
	{
		path: '/',
		component: LoginViewComponent
	},
	{
		path: '/login',
		component: LoginViewComponent
	},
	{
		path: '/userloggedin',
		component: UserLoggedinViewComponent
	},
	{
		path: './toggle-test',
		component: CollapseFeature
	}
])

export class AppComponent { 
	constructor() { } 
}

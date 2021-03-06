import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { FoodComponent } from './components/food.component';
import { AvatarComponent } from './components/avatar.component';
import { SignInComponent } from './components/signin.component';
import { UserLoggedinRoute } from './routes/userloggedin.route';
import { Modal, BS_MODAL_PROVIDERS } from 'angular2-modal/plugins/bootstrap';

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES, SignInComponent, UserLoggedinRoute],
	viewProviders: [BS_MODAL_PROVIDERS],
    template: `<div>
			  	<a class="loginarea" [routerLink]="['/login']">Login</a>
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
	// constructor() { } 
	constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }
}

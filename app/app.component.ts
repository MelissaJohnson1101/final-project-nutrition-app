import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';
import { FoodChoicesComponent } from './services/food-choice.component';
import { AvatarAreaComponent } from './services/avatar.component';
// import { LoginComponent } from './routes/login-in.component';
// import { PrivateInfoComponent } from './services/private-info.component';



@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES],
    template: `
            <div>
            <h1>Hello!</h1>
            <router-outlet></router-outlet>
            </div>
        `
})

@Routes([
	{
		path: '/',
		component: LoginComponent
	},
	{
		path: '/home/login',
		component: LoginComponent
	},
])

export class AppComponent { 
	constructor (){}
}




	// directives: [FoodChoicesComponent, AvatarAreaComponent],
	// template: `< h1 > FOOD APP< /h1>
	// 			< div class="row" >

	// 			<div class = "col-md-6" > <food-choice > </food-choice></div>
	// 			<div class = "col-md-6" > <avatar-area > </avatar-area></div>
	// 			</div>

	// 			export class AppComponent { }



import { Component } from '@angular/core';
import { FoodChoicesComponent } from './services/food-choice.component';
import { AvatarAreaComponent } from './services/avatar.component';

@Component({
	selector: 'my-app',
	directives: [FoodChoicesComponent, AvatarAreaComponent],
    template:`
				<h1>FOOD APP</h1>
				<div class="row">
				<div class = "col-md-6"> <food-choice> </food-choice></div>
				<div class = "col-md-6"> <avatar-area> </avatar-area></div>
				</div> `
})

export class AppComponent { }
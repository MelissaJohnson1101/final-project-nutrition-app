import { Component, Input } from '@angular/core';
import { FoodChoicesComponent } from '../services/food-choice.component';
import { AvatarAreaComponent } from '../services/avatar.component';


@Component({
	directives: [FoodChoicesComponent, AvatarAreaComponent],
	selector: 'user-loggedin-view',
	template: `
				<div style="text-align:center"><h1>Mutano Kid</h1></div><br>
				<div class="row">
				<div id="foodchoicebackground" class= "col s8"> <food-choice> </food-choice></div>
				<div id="boy-background" class= "col s4"> <avatar-area> </avatar-area></div>
				</div> 
				`
})
export class UserLoggedinViewComponent { }
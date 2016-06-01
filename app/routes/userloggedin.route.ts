import { Component, Input } from '@angular/core';
import { FoodComponent } from '../components/food.component';
import { AvatarComponent } from '../components/avatar.component';
import { PointsComponent } from '../components/points.component';
import { ChallengeComponent } from '../components/challenge.component';

@Component({
	directives: [FoodComponent, AvatarComponent, ChallengeComponent],
	selector: 'user-loggedin-view',
	template: `
				
				<div style="text-align:center"><h1>Mutano Kid</h1></div><br>
				<div class="row">
				<div id="foodchoicebackground" class= "col s6"> <food-choice> </food-choice></div>
				<div id="boy-background" class= "col s6"> <avatar-area> </avatar-area></div>
				</div> 
				<div class="row">
				<div id="challenge-area" class= "col s6"> <challenge-area> </challenge-area></div>
				<div id="points-area" class= "col s6"></div>
				</div> 
				`
})
export class UserLoggedinRoute { }


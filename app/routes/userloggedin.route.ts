import { Component, Input } from '@angular/core';
import { FoodComponent } from '../components/food.component';
import { AvatarComponent } from '../components/avatar.component';
import { PointsComponent } from '../components/points.component';
import { ChallengeComponent } from '../components/challenge.component';


@Component({
	directives: [FoodComponent, AvatarComponent, ChallengeComponent, PointsComponent],
	selector: 'user-loggedin-view',
	template: `
				
				<div style="text-align:center font-family:KBGoogleyEyes"><h1>Mutano Kid</h1></div><br>
				<div class="row">
				<div id="foodchoicebackground" class= "col s6"> <food-choice> </food-choice></div>
				<div class= "col s6 boy-background"> <avatar-area> </avatar-area></div>
				</div> 
				<div class="row">
				<div id="challenge-area" class= "col s6"> <challenge-area> </challenge-area></div>
				<div id="points-area-div" class= "col s6"> <points-area></points-area> </div>
				</div> 
				`
})
export class UserLoggedinRoute { }


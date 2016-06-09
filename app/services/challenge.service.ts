import { Injectable } from '@angular/core';
import { FoodService } from '../services/food.service';

@Injectable()

export class ChallengeService {

	public challenges: any = [
		{
			"name": "jumping jacks",
			"img": "app/images/JumpingJacks.gif",
			"title": "Exercise",
			"instruct": "20 jumping jacks",
			"points": 10,
			"complete": false
		},
		{
			"name": "breathe",
			"img": "app/images/breath-gif.gif",
			"title": "Breathe",
			"instruct": "10 deep breaths",
			"points": 10,
			"complete": false
		}
	]
	getChallengePoints(){
		let userChallPoints = 0;
		for (var c = 0; c < this.challenges.length; c++) {
			if (this.challenges[c].complete == true) {
				userChallPoints += this.challenges[c].points;
			}
		} 
		return userChallPoints; 
	}	
}
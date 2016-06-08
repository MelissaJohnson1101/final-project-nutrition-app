import { Injectable } from '@angular/core';
import { FoodService } from '../services/food.service';

@Injectable()

export class ChallengeService {

	public challenges: any = [
		{
			"name": "jumping jacks",
			"img": "app/images/JumpingJacks.gif",
			"points": 10,
			"complete": false
		},
		{
			"name": "breathe",
			"img": "app/images/breath-gif.gif",
			"points": 10,
			"complete": false
		}
	]

// for (var c = 0; c < this.challenges.length; c++) {
//     if (this.challenges[c].complete == true) {
//         userPoints += this.challenges[c].points;
//     }
// }
}
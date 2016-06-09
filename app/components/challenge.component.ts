import { Component, ElementRef, Input, Renderer, Injector, provide } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { FoodService } from "../services/food.service";
import { ChallengeService } from '../services/challenge.service';


@Component({
	directives: [MaterializeDirective],
	selector: 'challenge-area',
	templateUrl: 'app/templates/challenge.template.html'
})

export class ChallengeComponent { 
	constructor (private foodservice: FoodService, private challengeservice: ChallengeService) {}


	challChecked($event) {
		let checked = $event.target.checked;
	} 
}
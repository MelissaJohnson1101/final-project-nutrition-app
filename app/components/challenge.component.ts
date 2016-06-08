import { Component, ElementRef, Input, Renderer, Injector, provide } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { FoodService } from "../services/food.service";


@Component({
	directives: [MaterializeDirective],
	selector: 'challenge-area',
	templateUrl: 'app/templates/challenge.template.html'
})

export class ChallengeComponent { 
	constructor (private foodservice: FoodService) {}


	challChecked($event) {
		let checked = $event.target.checked;
	} 
}
import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food.service';
import { MaterializeDirective } from "angular2-materialize";

@Component({
	selector: 'food-choice',
	templateUrl: 'app/templates/food-choice.template.html',
	directives: [MaterializeDirective],

})
export class FoodComponent {
	constructor(private foodservice: FoodService){}
}
	
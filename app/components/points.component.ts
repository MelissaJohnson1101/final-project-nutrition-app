import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({

	selector: 'points-area',
	templateUrl: `app/templates/points-area.template.html`

})
export class PointsComponent {
	constructor(private foodservice: FoodService) { }
}




	
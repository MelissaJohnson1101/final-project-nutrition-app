import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
	selector: 'food-diart',
	template: ` <div>
			<h5> Food Diary</h5>
			<div>{{foodservice.getUserPoints()}}</div>
			{{cat.name}}_{{food.name}}
	
</div>
`

})

export class FoodDiary {
	constructor(private foodservice: FoodService) { }

}
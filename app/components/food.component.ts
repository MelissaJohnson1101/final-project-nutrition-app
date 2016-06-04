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

	isChecked($event, food) {
		let checked = $event.target.checked;
		if (checked){
			if (this.foodservice.checkedFoods.indexOf(food) == -1){
				this.foodservice.checkedFoods.push(food);
			}
		} else {
			var index = this.foodservice.checkedFoods.indexOf(food);
				if (index >= 0){
					this.foodservice.checkedFoods.splice(index, 1);
				}
		}
	}
	onSubmit() {
		for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
			this.foodservice.foodDiaryArr.push(this.foodservice.checkedFoods[fd]);
		}
	}

}
	
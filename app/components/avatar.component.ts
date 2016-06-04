import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FoodComponent } from '../components/food.component'

@Component({
	directives: [FoodComponent],
	selector: 'avatar-area',
	templateUrl: 'app/templates/avatar.template.html'
})

export class AvatarComponent { 
	constructor(private foodservice: FoodService) {}

	broccoliChecked() {
		for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++){
			if (this.foodservice.checkedFoods[fd].name == "broccoli") {
				return true;
			}  
		}
		return false;
	}
}


// if (this.foodservice.checkedFoods[fd].name == "broccoli" && this.foodservice.onSubmit() == true)
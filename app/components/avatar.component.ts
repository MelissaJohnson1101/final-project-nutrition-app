import { Component, Input } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FoodComponent } from '../components/food.component';

@Component({
	directives: [FoodComponent],
	selector: 'avatar-area',
	templateUrl: 'app/templates/avatar.template.html'
})

export class AvatarComponent {
	constructor(private foodservice: FoodService) { }


	broccoliChecked() {
		for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
			if (this.foodservice.checkedFoods[fd].name == "broccoli") {
				return true;
			}
		}
		return false;
	}
	carrotChecked() {
		for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
			if (this.foodservice.checkedFoods[fd].name == "carrot") {
				return true;
			}
		}
		return false;
	}
	asparagusChecked() {
		for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
			if (this.foodservice.checkedFoods[fd].name == "asparagus") {
				return true;
			}
		}
		return false;
	}
	candyChecked() {
		for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
			if (this.foodservice.checkedFoods[fd].name == "candy") {
				return true;
			}
		}
		return false;
	}

	quinoaChecked() {
		for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
			if (this.foodservice.checkedFoods[fd].name == "quinoa") {
				return true;
			}
		}
		return false;
	}

	popsicleChecked(){
		for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
			if (this.foodservice.checkedFoods[fd].name == "popsicle") {
				return true;
			}
		}
		return false;
	}
}


// if (this.foodservice.checkedFoods[fd].name == "broccoli" && this.foodservice.onSubmit() == true)
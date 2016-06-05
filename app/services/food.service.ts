import { Injectable } from '@angular/core';

@Injectable ()

export class FoodService{

	public listoffoods: any = [
		{
			name: "Vegetables",
			foods: [
				{
					name: "broccoli",
					points: 5
				},
				{
					name: "carrot",
					points: 2
				},
				{
					name: "green beans",
					points: 3
				},
				{
					name: "asparagus",
					points: 5
				}
			]
		},

		{
			name: "Fruits",
			foods: [
				{
					name: "apples",
					points: 4
				},
				{
					name: "strawberries",
					points: 3
				},
				{
					name: "peaches",
					points: 3
				},
				{
					name: "watermelon",
					points: 6
				}
			]
		},
		{
			name: "Grains",
			foods: [
				{
					name: "rice",
					points: 2
				},
				{
					name: "bread",
					points: 1
				},
				{
					name: "quinoa",
					points: 2
				},
				{
					name: "millet",
					points: 5
				}
			]
		},

		{
			name: "Dairy",
			foods: [
				{
					name: "milk",
					points: 2
				},
				{
					name: "cheese",
					points: 5
				},
				{
					name: "cottage cheese",
					points: 2
				},
				{
					name: "yogurt",
					points: 4
				}
			]
		},
		{
			name: "Snacks",
			foods: [
				{
					name: "popsicle",
					points: 1
				},
				{
					name: "candy",
					points: -3
				},
				{
					name: "fruit",
					points: 3
				}
			]
		}

	]
	checkedFoods = []
	
	public foodDiaryArr = [];	

	getUserPoints(){
		let userPoints = 0;
		for (var fd = 0; fd < this.foodDiaryArr.length; fd++) {
			userPoints += this.foodDiaryArr[fd].points;
		}
		if (this.foodDiaryArr[fd] == "candy") {
			userPoints -= this.foodDiaryArr[fd].points;
		} return userPoints;
	}
}







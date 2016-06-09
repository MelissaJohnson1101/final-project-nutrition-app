import { Injectable } from '@angular/core';

@Injectable ()

export class FoodService{

	public listoffoods: any = [
		{
			name: "Vegetables",
			foods: [
				{
					name: "broccoli",
					points: 5,
					img: 'app/images/broccoli5.png'
				},
				{
					name: "carrot",
					points: 2,
					img: 'app/images/carrots18.png'
				},
				{
					name: "green beans",
					points: 3,
					img: 'app/images/greenbean.png'
				},
				{
					name: "asparagus",
					points: 5,
					img: 'app/images/asparagusSM.png'
				}
			]
		},

		{
			name: "Fruits",
			foods: [
				{
					name: "apples",
					points: 4,
					img: 'app/images/apple.png'
				},
				{
					name: "strawberries",
					points: 3,
					img: 'app/images/strawberry.png'
				},
				{
					name: "peaches",
					points: 3,
					img: 'app/images/peach.png'
				},
				{
					name: "watermelon",
					points: 6,
					img: 'app/images/watermelon.png'
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
					points: 2,
					img: 'app/images/quinoa.png'
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
					points: 2,
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
					points: 1,
					img: 'app/images/popsicle.jpg'
				},
				{
					name: "candy",
					points: -3,
					img: 'app/images/candy.png'
				},
				{
					name: "fruit",
					points: 3,
					img: 'app/images/apple.png'
				}
			]
		}

	]
	checkedFoods = []
	
	public foodDiaryArr = [];	

	getUserPoints(){
		let userPoints = 0;
		let coins = 0;
		for (var fd = 0; fd < this.foodDiaryArr.length; fd++) {
			userPoints += this.foodDiaryArr[fd].points;
		}
		if (this.foodDiaryArr[fd] == "candy") {
			userPoints -= this.foodDiaryArr[fd].points;
		} 
		return userPoints;
		}	
	}








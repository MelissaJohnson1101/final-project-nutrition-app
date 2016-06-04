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
		}

	]
	checkedFoods = []

	// checkedFoods array is an array of objects containing name + points.
	// within [i] of the array pick value of index of obj.
	// [i] [0] = food name(val)
	// [i] [1] = points(val)
	
	public foodDiaryArr = [];	
	

	getUserPoints(){
		let userPoints = 0;
		for (var fd = 0; fd < this.foodDiaryArr.length; fd++) {
			userPoints += this.foodDiaryArr[fd].points;
			
		}
		console.log(this.foodDiaryArr);
		return userPoints;
	}
}


// onSubmit tasks:

//  get points
// 	add the points
//  display the added points
// 	push added points into userpointsarray for storage

// 	push food into food diary Array - gets used in foodDiary area and points area (do in FoodsComponent?)

// 	change the avatar 
//  if val of obj key [0] is broccoli, change the element





"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FoodService = (function () {
    function FoodService() {
        this.listoffoods = [
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
        ];
        this.checkedFoods = [];
        this.foodDiaryArr = [];
    }
    FoodService.prototype.getUserPoints = function () {
        var userPoints = 0;
        for (var fd = 0; fd < this.foodDiaryArr.length; fd++) {
            userPoints += this.foodDiaryArr[fd].points;
        }
        if (this.foodDiaryArr[fd] == "candy") {
            userPoints -= this.foodDiaryArr[fd].points;
        }
        return userPoints;
    };
    FoodService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FoodService);
    return FoodService;
}());
exports.FoodService = FoodService;
//# sourceMappingURL=food.service.js.map
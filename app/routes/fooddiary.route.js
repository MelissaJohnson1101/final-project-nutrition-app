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
var food_service_1 = require('../services/food.service');
var FoodDiary = (function () {
    function FoodDiary(foodservice) {
        this.foodservice = foodservice;
    }
    FoodDiary = __decorate([
        core_1.Component({
            selector: 'food-diart',
            template: " <div>\n\t\t\t<h5> Food Diary</h5>\n\t\t\t<div>{{foodservice.getUserPoints()}}</div>\n\t\t\t{{cat.name}}_{{food.name}}\n\t\n</div>\n"
        }), 
        __metadata('design:paramtypes', [food_service_1.FoodService])
    ], FoodDiary);
    return FoodDiary;
}());
exports.FoodDiary = FoodDiary;
//# sourceMappingURL=fooddiary.route.js.map
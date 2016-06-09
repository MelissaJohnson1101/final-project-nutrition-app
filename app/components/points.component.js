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
var challenge_service_1 = require('../services/challenge.service');
var PointsComponent = (function () {
    function PointsComponent(foodservice, challengeservice) {
        this.foodservice = foodservice;
        this.challengeservice = challengeservice;
    }
    PointsComponent = __decorate([
        core_1.Component({
            selector: 'points-area',
            templateUrl: "app/templates/points-area.template.html"
        }), 
        __metadata('design:paramtypes', [food_service_1.FoodService, challenge_service_1.ChallengeService])
    ], PointsComponent);
    return PointsComponent;
}());
exports.PointsComponent = PointsComponent;
//# sourceMappingURL=points.component.js.map
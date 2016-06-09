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
var food_component_1 = require('../components/food.component');
var challenge_service_1 = require('../services/challenge.service');
var AvatarComponent = (function () {
    function AvatarComponent(foodservice, challengeservice) {
        this.foodservice = foodservice;
        this.challengeservice = challengeservice;
    }
    AvatarComponent.prototype.broccoliChecked = function () {
        for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
            if (this.foodservice.checkedFoods[fd].name == "broccoli") {
                return true;
            }
        }
        return false;
    };
    AvatarComponent.prototype.carrotChecked = function () {
        for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
            if (this.foodservice.checkedFoods[fd].name == "carrot") {
                return true;
            }
        }
        return false;
    };
    AvatarComponent.prototype.asparagusChecked = function () {
        for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
            if (this.foodservice.checkedFoods[fd].name == "asparagus") {
                return true;
            }
        }
        return false;
    };
    AvatarComponent.prototype.candyChecked = function () {
        for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
            if (this.foodservice.checkedFoods[fd].name == "candy") {
                return true;
            }
        }
        return false;
    };
    AvatarComponent.prototype.quinoaChecked = function () {
        for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
            if (this.foodservice.checkedFoods[fd].name == "quinoa") {
                return true;
            }
        }
        return false;
    };
    AvatarComponent.prototype.popsicleChecked = function () {
        for (var fd = 0; fd < this.foodservice.checkedFoods.length; fd++) {
            if (this.foodservice.checkedFoods[fd].name == "popsicle") {
                return true;
            }
        }
        return false;
    };
    AvatarComponent.prototype.exerciseChecked = function () {
        for (var c = 0; c < this.challengeservice.challenges.length; c++) {
            if (this.challengeservice.challenges[c].complete == true) {
                return true;
            }
        }
        return false;
    };
    AvatarComponent = __decorate([
        core_1.Component({
            directives: [food_component_1.FoodComponent],
            selector: 'avatar-area',
            templateUrl: 'app/templates/avatar.template.html'
        }), 
        __metadata('design:paramtypes', [food_service_1.FoodService, challenge_service_1.ChallengeService])
    ], AvatarComponent);
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;
// if (this.foodservice.checkedFoods[fd].name == "broccoli" && this.foodservice.onSubmit() == true) 
//# sourceMappingURL=avatar.component.js.map
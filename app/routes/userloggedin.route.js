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
var food_component_1 = require('../components/food.component');
var avatar_component_1 = require('../components/avatar.component');
var points_component_1 = require('../components/points.component');
var challenge_component_1 = require('../components/challenge.component');
var UserLoggedinRoute = (function () {
    function UserLoggedinRoute() {
    }
    UserLoggedinRoute = __decorate([
        core_1.Component({
            directives: [food_component_1.FoodComponent, avatar_component_1.AvatarComponent, challenge_component_1.ChallengeComponent, points_component_1.PointsComponent],
            selector: 'user-loggedin-view',
            template: "\n\t\t\t\t\n\t\t\t\t<div style=\"text-align:center font-family:KBGoogleyEyes\"><h1>Mutano Kid</h1></div><br>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t<div id=\"foodchoicebackground\" class= \"col s6\"> <food-choice> </food-choice></div>\n\t\t\t\t<div class= \"col s6 boy-background\"> <avatar-area> </avatar-area></div>\n\t\t\t\t</div> \n\t\t\t\t<div class=\"row\">\n\t\t\t\t<div id=\"challenge-area\" class= \"col s6\"> <challenge-area> </challenge-area></div>\n\t\t\t\t<div id=\"points-area-div\" class= \"col s6\"> <points-area></points-area> </div>\n\t\t\t\t</div> \n\t\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], UserLoggedinRoute);
    return UserLoggedinRoute;
}());
exports.UserLoggedinRoute = UserLoggedinRoute;
//# sourceMappingURL=userloggedin.route.js.map
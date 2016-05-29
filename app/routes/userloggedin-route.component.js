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
var food_choice_component_1 = require('../services/food-choice.component');
var avatar_component_1 = require('../services/avatar.component');
var UserLoggedinViewComponent = (function () {
    function UserLoggedinViewComponent() {
    }
    UserLoggedinViewComponent = __decorate([
        core_1.Component({
            directives: [food_choice_component_1.FoodChoicesComponent, avatar_component_1.AvatarAreaComponent],
            selector: 'user-loggedin-view',
            template: "\n\t\t\t\t<div style=\"text-align:center\"><h1>Mutano Kid</h1></div><br>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t<div id=\"foodchoicebackground\" class= \"col s8\"> <food-choice> </food-choice></div>\n\t\t\t\t<div id=\"boy-background\" class= \"col s4\"> <avatar-area> </avatar-area></div>\n\t\t\t\t</div> \n\t\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], UserLoggedinViewComponent);
    return UserLoggedinViewComponent;
}());
exports.UserLoggedinViewComponent = UserLoggedinViewComponent;
//# sourceMappingURL=userloggedin-route.component.js.map